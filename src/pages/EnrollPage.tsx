import React, { useState } from 'react';
import { PageRoute, RegistrationFormData, FormErrors, SubmittedRegistration } from '../types';
import { 
  CheckCircle, 
  Copy, 
  Check, 
  MessageCircle, 
  AlertCircle, 
  ArrowLeft,
  Building,
  User,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { NaturalShadowOverlay } from '../components/BrandDecorations';

interface EnrollPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const EnrollPage: React.FC<EnrollPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    phone: '',
    district: '',
    profession: '',
    course: 'বেসিক টু অ্যাডভান্স রুকইয়াহ কোর্স',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<SubmittedRegistration | null>(null);
  const [copiedNumber, setCopiedNumber] = useState(false);

  const bkashNumber = '01723-836011';
  const bkashRawNumber = '01723836011';
  const helplineWhatsApp = '01347-456436';

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'আপনার পূর্ণ নাম লিখুন।';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'সঠিক পূর্ণ নাম প্রদান করুন।';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'আপনার মোবাইল / WhatsApp নম্বর লিখুন।';
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-\+]/g, '');
      const bdRegex = /^(?:8801|01)[3-9]\d{8}$/;
      if (!bdRegex.test(cleanPhone)) {
        newErrors.phone = 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।';
      }
    }

    if (!formData.district.trim()) {
      newErrors.district = 'আপনার জেলা বা অবস্থান লিখুন।';
    }

    if (!formData.profession.trim()) {
      newErrors.profession = 'আপনার পেশা বা পরিচয় লিখুন।';
    }

    if (!formData.course) {
      newErrors.course = 'কোর্স নির্বাচন করুন।';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const regId = 'NABA-' + Math.floor(100000 + Math.random() * 900000);
    const submission: SubmittedRegistration = {
      ...formData,
      registrationId: regId,
      submittedAt: new Date().toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    setSubmittedData(submission);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(bkashRawNumber);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2500);
  };

  const getWhatsAppConfirmationUrl = () => {
    if (!submittedData) return `https://wa.me/8801347456436`;
    
    const message = `আসসালামু আলাইকুম। আমি নববী একাডেমিতে রেজিস্ট্রেশন সম্পন্ন করেছি।\n\nরেজিস্ট্রেশন আইডি: ${submittedData.registrationId}\nনাম: ${submittedData.fullName}\nমোবাইল: ${submittedData.phone}\nজেলা: ${submittedData.district}\nপেশা: ${submittedData.profession}\nকোর্স: ${submittedData.course}\n\nআমার পেমেন্ট তথ্য / ট্রানজেকশন আইডি নিচে জানাচ্ছি:`;
    
    return `https://wa.me/8801347456436?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="relative py-14 sm:py-20 bg-academy-ivory min-h-[calc(100vh-80px)] overflow-hidden">
      <NaturalShadowOverlay />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F3D32] hover:text-[#C9A962] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>হোমে ফিরে যান</span>
          </button>
        </div>

        {/* CONDITION 1: SUCCESS CONFIRMATION & PAYMENT SCREEN */}
        {submittedData ? (
          <div className="bg-white rounded-2xl border border-[#0F3D32]/12 shadow-md p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
            
            {/* Success Header */}
            <div className="text-center space-y-3 pb-6 border-b border-[#0F3D32]/10">
              <div className="w-16 h-16 rounded-full bg-[#0F3D32] text-[#C9A962] mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0F3D32] leading-tight font-serif">
                ধন্যবাদ! আপনার রেজিস্ট্রেশন সফলভাবে গৃহীত হয়েছে।
              </h1>
              <p className="text-sm text-[#1E1E1E]/70">
                রেজিস্ট্রেশন আইডি:{' '}
                <span className="font-mono font-bold text-[#0F3D32]">
                  {submittedData.registrationId}
                </span>
              </p>
            </div>

            {/* Clear distinction: Registration Submitted vs Payment Confirmed */}
            <div className="bg-[#FBF7EC] border border-[#C9A962]/50 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0F3D32]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block animate-pulse" />
                <span>বর্তমান স্ট্যাটাস: রেজিস্ট্রেশন জমা হয়েছে (Registration Submitted)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1E1E1E]/80 leading-relaxed">
                আপনার তথ্যাদি আমাদের কাছে সংরক্ষিত হয়েছে। নিচের নির্দেশিকা অনুযায়ী বিকাশ (bKash) পেমেন্ট সম্পন্ন করে WhatsApp-এ মেসেজ দিলেই আপনার <strong>ভর্তি চূড়ান্ত (Payment Confirmed)</strong> হবে।
              </p>
            </div>

            {/* PAYMENT METHOD SECTION — 04 ACADEMY CHARCOAL SCHOLARLY Special Use */}
            <div className="border border-[#C9A962]/40 rounded-2xl p-6 sm:p-7 bg-academy-charcoal text-[#FBF7EC] space-y-6 shadow-md">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#FBF7EC]/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E2136E] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    বিকাশ
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white font-serif">
                      পেমেন্ট মেথড: bKash (ম্যানুয়াল)
                    </h2>
                    <span className="text-xs text-[#C9A962]">
                      Personal Account (পার্সোনাল একাউন্ট)
                    </span>
                  </div>
                </div>
              </div>

              {/* bKash Number Box with Copy Action */}
              <div className="bg-[#171717] p-5 rounded-xl border border-[#C9A962]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#FBF7EC]/70 font-medium">
                    bKash Personal Account নম্বর:
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#C9A962] tracking-wider mt-1 font-mono">
                    {bkashNumber}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="bg-[#D8B45E] hover:bg-[#C8A44E] text-[#0A2922] px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-150 inline-flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-xs"
                >
                  {copiedNumber ? (
                    <>
                      <Check className="w-4 h-4 text-[#0A2922]" />
                      <span>নম্বর কপি হয়েছে!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#0A2922]" />
                      <span>নম্বর কপি করুন</span>
                    </>
                  )}
                </button>
              </div>

              {/* Specific Payment Instructions */}
              <div className="space-y-3 text-sm text-[#FBF7EC]/85">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#C9A962] shrink-0 font-['Cinzel',serif]">1.</span>
                  <p>
                    আপনার বিকাশ অ্যাপ থেকে <strong className="text-white">Send Money</strong> অপশন ব্যবহার করে উপরের নম্বরে সেন্ড মানি করুন।
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#C9A962] shrink-0 font-['Cinzel',serif]">2.</span>
                  <p className="font-medium text-[#C9A962]">
                    পেমেন্টের সময় রেফারেন্সে আপনার নাম বা ফোন নম্বর ব্যবহার করুন।
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#C9A962] shrink-0 font-['Cinzel',serif]">3.</span>
                  <p>
                    পেমেন্ট সম্পন্ন করার পর স্ক্রিনশট বা ট্রানজেকশন আইডি সহ আমাদের WhatsApp-এ পাঠান।
                  </p>
                </div>
              </div>

            </div>

            {/* Primary Action Button to Send Message on WhatsApp */}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={getWhatsAppConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0F3D32] hover:bg-[#0A2922] text-white font-bold text-base py-4 px-6 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-3 text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#C9A962]" />
                <span>পেমেন্ট নিশ্চিত করতে WhatsApp-এ মেসেজ দিন</span>
              </a>

              <div className="text-center text-xs text-[#1E1E1E]/60">
                WhatsApp হেল্পলাইন: {helplineWhatsApp}
              </div>
            </div>

            {/* Submitted Info Recap */}
            <div className="bg-[#FBF7EC] rounded-xl p-5 border border-[#0F3D32]/10 space-y-2 text-xs sm:text-sm text-[#1E1E1E]/80">
              <div className="font-bold text-[#0F3D32] mb-2 font-serif">
                আপনার দেওয়া তথ্যাবলি:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <span className="text-[#1E1E1E]/60">নাম:</span> {submittedData.fullName}
                </div>
                <div>
                  <span className="text-[#1E1E1E]/60">মোবাইল:</span> {submittedData.phone}
                </div>
                <div>
                  <span className="text-[#1E1E1E]/60">জেলা:</span> {submittedData.district}
                </div>
                <div>
                  <span className="text-[#1E1E1E]/60">পেশা:</span> {submittedData.profession}
                </div>
              </div>
            </div>

            {/* Reset / New Registration option */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setSubmittedData(null);
                  setFormData({
                    fullName: '',
                    phone: '',
                    district: '',
                    profession: '',
                    course: 'বেসিক টু অ্যাডভান্স রুকইয়াহ কোর্স',
                  });
                }}
                className="text-xs text-[#0F3D32] hover:underline cursor-pointer"
              >
                নতুন আরেকটি রেজিস্ট্রেশন করতে চান? এখানে ক্লিক করুন
              </button>
            </div>

          </div>
        ) : (
          /* CONDITION 2: REGISTRATION FORM */
          <div className="bg-white rounded-2xl border border-[#0F3D32]/12 shadow-sm p-6 sm:p-10">
            
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0F3D32]/70 font-['Cinzel',serif] mb-2">
                <GraduationCap className="w-4 h-4 text-[#C9A962]" />
                <span>Online Registration</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-[#0F3D32] tracking-tight font-serif">
                কোর্স রেজিস্ট্রেশন ফরম
              </h1>
              <p className="text-sm sm:text-base text-[#1E1E1E]/80 mt-2.5">
                নিচের তথ্যগুলো সঠিকভাবে পূরণ করে আপনার ভর্তি প্রক্রিয়া সম্পন্ন করুন।
              </p>
              <div className="w-16 h-[1.5px] bg-[#C9A962] mx-auto mt-4" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Field 1: Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-[#0F3D32] mb-1.5"
                >
                  পূর্ণ নাম <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1E1E1E]/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm sm:text-base text-[#1E1E1E] bg-[#FBF7EC]/20 focus:bg-white focus:outline-hidden transition-colors ${
                      errors.fullName
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-[#0F3D32]/20 focus:border-[#0F3D32] focus:ring-1 focus:ring-[#0F3D32]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Mobile / WhatsApp */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[#0F3D32] mb-1.5"
                >
                  মোবাইল / WhatsApp নম্বর <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1E1E1E]/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="আপনার মোবাইল নম্বর লিখুন"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm sm:text-base text-[#1E1E1E] bg-[#FBF7EC]/20 focus:bg-white focus:outline-hidden transition-colors ${
                      errors.phone
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-[#0F3D32]/20 focus:border-[#0F3D32] focus:ring-1 focus:ring-[#0F3D32]'
                    }`}
                  />
                </div>
                {errors.phone ? (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                ) : (
                  <p className="mt-1 text-xs text-[#1E1E1E]/55">
                    এই নম্বরে আপনার ক্লাসের লিংক ও যোগাযোগ করা হবে।
                  </p>
                )}
              </div>

              {/* Field 3: District / Location */}
              <div>
                <label
                  htmlFor="district"
                  className="block text-sm font-semibold text-[#0F3D32] mb-1.5"
                >
                  জেলা / অবস্থান <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1E1E1E]/40">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={(e) => {
                      setFormData({ ...formData, district: e.target.value });
                      if (errors.district) setErrors({ ...errors, district: undefined });
                    }}
                    placeholder="আপনার জেলা লিখুন"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm sm:text-base text-[#1E1E1E] bg-[#FBF7EC]/20 focus:bg-white focus:outline-hidden transition-colors ${
                      errors.district
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-[#0F3D32]/20 focus:border-[#0F3D32] focus:ring-1 focus:ring-[#0F3D32]'
                    }`}
                  />
                </div>
                {errors.district && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.district}</span>
                  </p>
                )}
              </div>

              {/* Field 4: Profession / Identity */}
              <div>
                <label
                  htmlFor="profession"
                  className="block text-sm font-semibold text-[#0F3D32] mb-1.5"
                >
                  পেশা / পরিচয় <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1E1E1E]/40">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={(e) => {
                      setFormData({ ...formData, profession: e.target.value });
                      if (errors.profession) setErrors({ ...errors, profession: undefined });
                    }}
                    placeholder="আপনার পেশা বা পরিচয় লিখুন"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm sm:text-base text-[#1E1E1E] bg-[#FBF7EC]/20 focus:bg-white focus:outline-hidden transition-colors ${
                      errors.profession
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-[#0F3D32]/20 focus:border-[#0F3D32] focus:ring-1 focus:ring-[#0F3D32]'
                    }`}
                  />
                </div>
                {errors.profession && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.profession}</span>
                  </p>
                )}
              </div>

              {/* Field 5: Course Selection */}
              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-semibold text-[#0F3D32] mb-1.5"
                >
                  কোর্স নির্বাচন করুন <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1E1E1E]/40">
                    <Building className="w-4 h-4" />
                  </div>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#0F3D32]/20 bg-[#FBF7EC]/20 text-sm sm:text-base text-[#1E1E1E] focus:bg-white focus:border-[#0F3D32] focus:ring-1 focus:ring-[#0F3D32] focus:outline-hidden"
                  >
                    <option value="বেসিক টু অ্যাডভান্স রুকইয়াহ কোর্স">
                      বেসিক টু অ্যাডভান্স রুকইয়াহ কোর্স
                    </option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#0F3D32] hover:bg-[#0A2922] text-[#FBF7EC] font-bold text-base py-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer text-center"
                >
                  রেজিস্ট্রেশন জমা দিন
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-[#1E1E1E]/60">
                  ভর্তি সংক্রান্ত যেকোনো সমস্যায় সরাসরি কল বা WhatsApp করতে পারেন: {helplineWhatsApp}
                </p>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
