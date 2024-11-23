import React, { useState } from 'react';
import { Upload, Plus, Trash2 } from 'lucide-react';
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
    "Computer Science",
    "Data Science",
    "Medicine",
    "Business",
    "Engineering",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology"
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

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#212529] mb-6">Complete Your Profile</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-12 gap-6">
          {/* Top Row - Photo and Basic Info */}
          <div className="col-span-3">
            <div className="relative w-full aspect-square rounded-lg bg-[#F8F9FA] border border-[#DEE2E6] flex items-center justify-center overflow-hidden">
              {photoPreview ? (
                <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <Upload className="w-8 h-8 text-[#6C757D]" />
              )}
              <label className="absolute bottom-2 left-2 right-2 px-3 py-1.5 bg-[#007BFF] hover:bg-[#0056b3] text-white text-sm rounded text-center cursor-pointer transition-colors">
                Upload Photo
                <input type="file" className="hidden" onChange={handlePhotoChange} accept="image/*" />
              </label>
            </div>
          </div>

          <div className="col-span-9 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#212529] mb-1.5">I am a</label>
              <select 
                className="w-full p-2 border border-[#DEE2E6] rounded bg-white"
                value={userType}
                onChange={(e) => setUserType(e.target.value as 'student' | 'professional')}
              >
                <option value="student">Student</option>
                <option value="professional">Working Professional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#212529] mb-1.5">
                {userType === 'student' ? 'Desired Career Path' : 'Current Career'}
              </label>
              <input
                type="text"
                className="w-full p-2 border border-[#DEE2E6] rounded"
                placeholder={userType === 'student' ? "What do you want to become?" : "What's your current role?"}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#212529] mb-1.5">Education Level</label>
              <select className="w-full p-2 border border-[#DEE2E6] rounded bg-white">
                <option>Undergraduate</option>
                <option>Graduate</option>
                <option>Professional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#212529] mb-1.5">
                {userType === 'student' ? 'Current Institution' : 'Organization'}
              </label>
              <input
                type="text"
                className="w-full p-2 border border-[#DEE2E6] rounded"
                placeholder={userType === 'student' ? "Your university/college" : "Your company"}
              />
            </div>
          </div>

          {/* Middle Row - Fields and Skills */}
          <div className="col-span-12">
            <label className="block text-sm font-medium text-[#212529] mb-1.5">Field of Study/Interest</label>
            <select className="w-full p-2 border border-[#DEE2E6] rounded bg-white">
              {fields.map(field => (
                <option key={field} value={field}>{field}</option>
              ))}
            </select>
          </div>

          <div className="col-span-12">
            <label className="block text-sm font-medium text-[#212529] mb-1.5">Skills & Competencies</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#F8F9FA] border border-[#DEE2E6] rounded-full flex items-center gap-2"
                >
                  {skill}
                  <button onClick={() => removeSkill(skill)} className="hover:text-[#DC3545]">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 border border-[#DEE2E6] rounded"
                placeholder="Add a skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
              <button
                onClick={addSkill}
                className="px-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Row - Goals */}
          <div className="col-span-12">
            <label className="block text-sm font-medium text-[#212529] mb-1.5">Learning Goals</label>
            <textarea
              className="w-full p-2 border border-[#DEE2E6] rounded h-20 resize-none"
              placeholder="What do you want to achieve? (e.g., Learn Python in 3 months, Master Algorithms)"
            />
          </div>

          {/* Action Buttons */}
          <div className="col-span-12 flex justify-end gap-3 mt-2">
            <button 
              onClick={onClose}
              className="px-4 py-2 border border-[#6C757D] text-[#6C757D] hover:bg-[#6C757D] hover:text-white rounded transition-colors"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded transition-colors">
              Save Profile
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSetupModal;
