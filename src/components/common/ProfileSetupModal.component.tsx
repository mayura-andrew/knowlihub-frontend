import React, { useState } from 'react';
import { Upload, Plus, X, Globe, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProfileSetupModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfileSetupModal: React.FC<ProfileSetupModalProps> = ({ open, onClose }) => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>('');
  const [userType, setUserType] = useState<'student' | 'professional'>('student');

  const fields = [
    "Computer Science", "Data Science", "Medicine", "Business",
    "Engineering", "Mathematics", "Physics", "Chemistry", "Biology"
  ];

  const discoveryOptions = [
    "Google Search",
    "Social Media",
    "Friend Recommendation",
    "Educational Institution",
    "Professional Network",
    "Online Advertisement",
    "Other"
  ];

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-6 overflow-y-auto max-h-[90vh] custom-scrollbar rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#212529]">
            Complete Your Profile
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {/* Photo Upload and Type Selection */}
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-[#F8F9FA] border-2 border-[#DEE2E6] flex items-center justify-center overflow-hidden">
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <Upload className="w-6 h-6 text-[#6C757D]" />
                )}
              </div>
              <label className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#007BFF] hover:bg-[#0056b3] rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Plus className="w-4 h-4 text-white" />
                <input type="file" className="hidden" onChange={handlePhotoChange} accept="image/*" />
              </label>
            </div>

            <div className="flex-1">
              <select 
                className="w-full p-2 text-sm border border-[#DEE2E6] rounded-md bg-white focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                value={userType}
                onChange={(e) => setUserType(e.target.value as 'student' | 'professional')}
              >
                <option value="student">I am a Student</option>
                <option value="professional">I am a Working Professional</option>
              </select>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
              placeholder="First Name"
            />
            <input
              type="text"
              className="p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
              placeholder="Last Name"
            />
          </div>

          {/* Professional Information */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="col-span-2 p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
              placeholder={userType === 'student' ? "What do you want to become?" : "What's your current role?"}
            />

            <select className="p-2 text-sm border border-[#DEE2E6] rounded-md bg-white focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all">
              <option value="">Education Level</option>
              <option>Undergraduate</option>
              <option>Graduate</option>
              <option>Professional</option>
            </select>

            <select className="p-2 text-sm border border-[#DEE2E6] rounded-md bg-white focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all">
              <option value="">Field of Study</option>
              {fields.map(field => (
                <option key={field} value={field}>{field}</option>
              ))}
            </select>

            <input
              type="text"
              className="col-span-2 p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
              placeholder={userType === 'student' ? "Your university/college" : "Your company"}
            />
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <div className="text-sm font-medium text-[#495057]">Connect Your Profiles</div>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#6C757D]" />
                <input
                  type="url"
                  className="flex-1 p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                  placeholder="Personal Website"
                />
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-[#6C757D]" />
                <input
                  type="url"
                  className="flex-1 p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                  placeholder="GitHub Profile"
                />
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-[#6C757D]" />
                <input
                  type="url"
                  className="flex-1 p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                  placeholder="LinkedIn Profile"
                />
              </div>
              <div className="flex items-center gap-2">
                <Twitter className="w-4 h-4 text-[#6C757D]" />
                <input
                  type="url"
                  className="flex-1 p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                  placeholder="X (Twitter) Profile"
                />
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-[#6C757D]" />
                <input
                  type="url"
                  className="flex-1 p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                  placeholder="Facebook Profile"
                />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                placeholder="Add skills & competencies"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
              <button
                onClick={addSkill}
                className="px-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-md transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-[#F8F9FA] text-xs rounded-full flex items-center gap-1"
                  >
                    {skill}
                    <button 
                      onClick={() => setSkills(skills.filter(s => s !== skill))}
                      className="hover:text-[#DC3545] transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Learning Goals */}
          <textarea
            className="w-full p-2 text-sm border border-[#DEE2E6] rounded-md h-20 resize-none focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
            placeholder="What do you want to achieve? (e.g., Learn Python in 3 months, Master Algorithms)"
          />

          {/* Platform Discovery */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#495057]">
              How did you find our platform?
            </label>
            <select className="w-full p-2 text-sm border border-[#DEE2E6] rounded-md bg-white focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all">
              <option value="">Select an option</option>
              {discoveryOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button 
              onClick={onClose}
              className="px-4 py-1.5 text-sm border border-[#6C757D] text-[#6C757D] hover:bg-[#6C757D] hover:text-white rounded-md transition-all"
            >
              Cancel
            </button>
            <button className="px-4 py-1.5 text-sm bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-md transition-all">
              Save Profile
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSetupModal;
