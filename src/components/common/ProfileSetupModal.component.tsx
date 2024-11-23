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
      <DialogContent className="max-w-4xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#212529] mb-8">
            Complete Your Profile
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Photo */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="relative w-48 h-48">
              <div className="w-full h-full rounded-full bg-[#F8F9FA] border-4 border-[#DEE2E6] flex items-center justify-center overflow-hidden">
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <Upload className="w-12 h-12 text-[#6C757D]" />
                )}
              </div>
              <label className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs rounded cursor-pointer transition-colors shadow-lg">
                Upload Photo
                <input type="file" className="hidden" onChange={handlePhotoChange} accept="image/*" />
              </label>
            </div>
          </div>

          {/* Right Column - Form Fields */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Info Section */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212529]">I am a</label>
                <select 
                  className="w-full p-3 border border-[#DEE2E6] rounded-lg bg-white focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value as 'student' | 'professional')}
                >
                  <option value="student">Student</option>
                  <option value="professional">Working Professional</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212529]">
                  {userType === 'student' ? 'Desired Career Path' : 'Current Career'}
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-[#DEE2E6] rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                  placeholder={userType === 'student' ? "What do you want to become?" : "What's your current role?"}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212529]">Education Level</label>
                <select className="w-full p-3 border border-[#DEE2E6] rounded-lg bg-white focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all">
                  <option>Undergraduate</option>
                  <option>Graduate</option>
                  <option>Professional</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212529]">
                  {userType === 'student' ? 'Current Institution' : 'Organization'}
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-[#DEE2E6] rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                  placeholder={userType === 'student' ? "Your university/college" : "Your company"}
                />
              </div>

              {/* Field of Study Section */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212529]">Field of Study/Interest</label>
                <select className="w-full p-3 border border-[#DEE2E6] rounded-lg bg-white focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all">
                  {fields.map(field => (
                    <option key={field} value={field}>{field}</option>
                  ))}
                </select>
              </div>

              {/* Skills Section */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212529]">Skills & Competencies</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 p-3 border border-[#DEE2E6] rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                    placeholder="Add a skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <button
                    onClick={addSkill}
                    className="px-4 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-lg transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="px-1 py-1 bg-[#F8F9FA] border border-[#DEE2E6] rounded-full flex items-center gap-1"
                    >
                      {skill}
                      <button 
                        onClick={() => removeSkill(skill)} 
                        className="hover:text-[#DC3545] transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning Goals Section */}
            <div className="mt-6 space-y-2">
              <label className="block text-sm font-medium text-[#212529]">Learning Goals</label>
              <textarea
                className="w-full p-3 border border-[#DEE2E6] rounded-lg h-24 resize-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
                placeholder="What do you want to achieve? (e.g., Learn Python in 3 months, Master Algorithms)"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-12 flex justify-end gap-4 mt-4">
            <button 
              onClick={onClose}
              className="px-4 py-2 border-2 border-[#6C757D] text-[#6C757D] hover:bg-[#6C757D] hover:text-white rounded-full transition-all"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-full transition-all">
              Save Profile
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSetupModal;
