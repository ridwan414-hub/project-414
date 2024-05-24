import IntroCard from "./Intro-Card";

const HomepageIntro = () => {
  const introData = [
    {
      title: "আমাদের সম্পর্কে",
      description:
        "মানুষ একা স্বয়ংসর্ম্পুন ও স্বনির্ভর নয়। সহজ, সুন্দর ও স্বাভাবিক জীবন যাপনের জন্য একে অপরের সাহায্যের উপর নির্ভর করতে হয়, তাই মানুষ সামাজিক জীব। স্বভাবতই মানুষ অন্যের সাহায্য ছাড়া চলতে পারনো। একে অন্যরে উপকার, সহানুভূতি ছাড়া মানব জীবন মূল্যহীন। বাংলাদশে পৃথবিীতে প্রাকৃতকি র্দুযোগ প্রবণ দশেগুলোর মধ্যে অন্যতম ঝুঁকর্পিূণ দশে হিসেবে চহ্নিতি। একই ভাবে বাংলাদশেরে ভতির যে সমস্ত জলোগুলো অধকি ঝুঁকর্পিূণ তার মধ্যে আমাদরে ফনেী জলো অন্যতম। তাই আমরা নিজেরাই নিজেদের জেলার বপিদগ্রস্থদরে সহযোগতিায় নিজেদের হাত প্রসারতি করতে পার। আমরা ব্যক্তগিত ভাবে দরীদ্র আত্মীয় স্বজন ও পাড়া প্রতিবেশীকে সহযোগতিা করি কিন্তু এতে প্রকৃতপক্ষে তাদরে অভাব দূর হয়না। আমরা ঐক্যবদ্ধ ভাবে পরিকল্পিত উপায়ে অভাব গ্রস্থদের পাশে দাড়াতে পারলে ইনশাল্লাহ আমাদের সম্মিলিত প্রচষ্টোয় এই সংগঠনের মাধ্যমে প্রতিবেশী দরীদ্র পরিবারকে সচ্ছল করে তোলা সম্ভব হবে সেই বহুল প্রচারীত প্রবাদের মতই দশে মিলে করি কাজ, হারি জিতি নাহি লাজ। সুযোগ থাকা সত্ত্বওে পরচিয় নেই বলে একজন ফেনী জেলার দক্ষ নাগরীক প্রবাসে বেকার জীবন অতবিাহতি করে। এই প্লাটর্ফমে পরিচয়ের মাধ্যমে দক্ষতার বিবেচনায় জুড়ে যেতে পারে তার মান সম্মত একটি চাকুরী। দলমত নির্বিশেষে দেশপ্রেম ঐক্য মানবতার বন্ধনে ফেনী জেলার সকল স্তররে সৌদি আরব প্রবাসীদের একটি প্লাটর্ফমে একত্রতি করে একে অন্যকে সহযোগতিার মানসকিতা নিয়ে ঐক্য বদ্ধ ভাবে নিজ জেলার সাংস্কৃতি, ঐতহ্যি বিশ্ব দরবারে তুলে ধরার প্রত্যাশা নিয়ে সৌদি আরবস্থ ফনেী প্রবাসী ফোরামরে যাত্রা শুরু।এই প্লাটরমে সকল প্রকার সাহায্য প্রদান করা হয়। যেমন মানবিক সাহায্য, আর্থিক সাহায্য, শিক্ষাগত সাহায্য, স্বাস্থ্য সেবা প্রদান, প্রশাসনিক সাহায্য ইত্যাদি।",
    },
    {
      title: "আমাদের লক্ষ্য",
      description:
        "আমাদের লক্ষ্য হচ্ছে সমাজের দুর্বল ও দারিদ্র স্বজন ও পাড়া প্রতিবেশীদের প্রতি সহানুভূতি ও সাহায্য প্রদান করা। ",
    },
    {
      title: "আমাদের উদ্দেশ্য",
      description:
        "আমাদের উদ্দেশ্য হচ্ছে সমাজের দুর্বল ও দারিদ্র স্বজন ও পাড়া প্রতিবেশীদের প্রতি সহানুভূতি ও সাহায্য প্রদান করা। ",
    },
    {
      title: "আমাদের কাজ",
      description:
        "মানুষ একা স্বয়ংসর্ম্পুন ও স্বনির্ভর নয়। সহজ, সুন্দর ও স্বাভাবিক জীবন যাপনের জন্য একে অপরের সাহায্যের উপর নির্ভর করতে হয়, তাই মানুষ সামাজিক জীব।",
    },
  ];
  return (
    <div className="w-full bg-gray-300 flex flex-col items-center py-32 gap-10">
      <h1 className="text-5xl text-[#ed1c24] font-bold text-center">
        Voice of Muslims
      </h1>
      <p className="text-2xl">
        ভয়েস অফ মুসলিম ফোরাম একটি সমগ্র বিশ্ববেপী সামাজিক সাংস্কৃতিক ও স্বেচ্ছা
        সেবী সংগঠন!
      </p>
      <div className="flex flex-wrap gap-4">
        {introData.map((data, index) => (
          <IntroCard
            key={index}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};
export default HomepageIntro;
