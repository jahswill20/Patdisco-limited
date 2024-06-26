

const AboutUs = () => {
  return (
    <div className="bg-pink-400 px-4 py-4 mt-3 md:flex md:px-20 md:py-40 md:gap-16" id="About">
      <div>
        <div className="flex  text-center md:bg-black md:w-44 md:h-40 md:justify-center md:items-center md:rounded-r-full ">
            <h2 className="text-3xl font-bold text-white text-center relative mx-auto mb-4 mt-3">About us </h2>
        </div>
       <div className="flex flex-col mx-auto gap-2 items-center justify-center md:mt-7 md:gap-8 md:text-left">
            <p className="font-bold md:-ml-6">Founded june 2023</p>
            <p className="font-bold">Partnership with Barclays Eagle lab</p>
            <p className="font-bold">Microsoft Founders Sponsorship Award</p>
        </div>
      </div>
      <div className="px-3 mt-3">
        
           <p className="font-bold mb-3 md:font-bold md:text-xl md:mt-5 md:mb-8">
                    Founded in June 2023, Patdisco Ltd. specializes in social finance provision and social 
            financial education, leveraging our expertise to empower users in navigating the 
            intricacies of managing unexpected expenses related to vehicle parking and driving 
            fines. With a deep understanding of the various levels of escalation in minor debt 
            situations, we are committed to equipping individuals with the necessary tools and 
            knowledge to handle such challenges effectively.

            </p>
            <p className="font-bold md:font-bold md:text-xl">
            At the heart of our operations lies a profound commitment to mitigating adverse debt 
            occurrences over prolonged durations. By offering accessible financial education and 
            practical solutions, we strive to alleviate the financial burdens faced by individuals and 
            communities, particularly in regions characterized by high living costs. Through our 
            endeavours, we aim to foster greater financial resilience and promote social inclusion, 
            ultimately contributing to a more equitable society.
            </p>
        
      </div>
    </div>
  );
}

export default AboutUs;
