import metascraper from 'metascraper';
import metascraperImage from 'metascraper-image';
import metascraperUrl from 'metascraper-url';
import metascraperTitle from 'metascraper-title';
import metascraperDescription from 'metascraper-description';
import got from 'got';

const scraper = metascraper([
  metascraperImage(),
  metascraperUrl(),
  metascraperTitle(),
  metascraperDescription()
]);

export const fetchMetaData = async (url: string) => {
  const { body: html, url: responseUrl } = await got(url);
  const metadata = await scraper({ html, url: responseUrl });
  return metadata;
};