import { motion } from 'framer-motion';

const Reviews = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 text-gray-900">
      <div className="max-w-3xl mx-auto px-6">

        {/* Reviews Section */}
        <section className="mt-16">
          <motion.h3
            className="text-3xl sm:text-4xl font-extrabold text-indigo-600 text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Colleague Reviews
          </motion.h3>
          <div className="space-y-8">
            {[ 
              { 
                name: 'Sabelo Makhoba', 
                title: 'Software Developer', 
                company: 'FNB', 
                qualification: 'BSc in information and Communication Technology',
                institution: 'DUT',
                review: 'Panashe is a passionate and diligent worker. His passion for IT and data makes him stand out amongst other candidates!' 
              },
              { 
                name: 'Deno Rautenbach', 
                title: 'Software Developer', 
                company: 'DataBalk', 
                // qualification: 'BEng in Software Engineering',
                // institution: 'Stellenbosch University',
                review: "Panashe is a driven individual and would be a valued asset at any company he's a part of!" 
              },
              { 
                name: 'Wessel Havenga', 
                title: 'Engineer Manager', 
                company: 'DataBalk', 
                qualification: 'Masters',
                institution: 'UWC',
                review: 'I had the pleasure of working closely with Panashe during his time at DataBalk, and I can confidently say he is a very talented and driven young professional. I enjoyed collaborating with him on projects. Panashe has an eagerness to learn and great problem-solving abilities, making him a key asset to the company. His interests in data analytics, Power BI, and SQL were always complemented by his friendly personality and willingness to help others. He consistently approached challenges with a fresh perspective and delivered quality solutions, especially in managing data and business intelligence. I have no doubt that his career will continue to flourish, and any team would be fortunate to have him on board.' 
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-500"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h4 className="text-lg sm:text-xl font-semibold text-indigo-600">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.title} at {review.company}</p>
                <p className="text-sm text-gray-600">{review.qualification}, {review.institution}</p>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">{`"${review.review}"`}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Reviews;
