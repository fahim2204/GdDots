import { useState } from "react";

const NewsLetter = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What type of graphic design services do you offer?",
      answer:
        "We offer a wide range of graphic design services including logo design, brand identity, web design, packaging design, print design, and more. Our team of experienced designers can help bring your vision to life.",
    },
    {
      question: "How much do your graphic design services cost?",
      answer:
        "The cost of our graphic design services varies depending on the scope of the project, the complexity of the design, and the amount of time required to complete the work. We offer competitive pricing and will provide you with a detailed estimate before beginning any work.",
    },
    {
      question:
        "What is your process for working with clients on a graphic design project?",
      answer:
        "Our process typically involves an initial consultation to discuss the project requirements, followed by research and brainstorming to develop design concepts. We will then present several design options for your review and feedback, and work with you to refine the chosen design until it meets your satisfaction. We then finalize the design and deliver the necessary files for use.",
    },
    {
      question: "What file formats do you deliver for graphic design projects?",
      answer:
        "We typically deliver the final designs in high-resolution, print-ready formats such as AI, EPS, and PDF, as well as web-ready formats such as PNG and JPG. If you have specific file format requirements, please let us know and we will do our best to accommodate your needs.",
    },
    {
      question: "Do you offer revisions for graphic design projects?",
      answer:
        "Yes, we offer revisions for all graphic design projects to ensure that the final design meets your expectations. We will work with you to make any necessary changes until you are satisfied with the final design. Please note that additional revisions may incur additional fees.",
    },
  ]);
  

  const toggleAnswer = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].showAnswer = !faqs[index].showAnswer;
    setFaqs(newFaqs);
  };

  return (
    <div id="newsletter" className="max-w-6xl mx-auto px-5 py-6">
      <div className="grid grid-cols-2 gap-x-16">
        <div className="mb-8">
          <img src="./img/faq.webp" alt="FAQ" />
        </div>
        <div className="mb-8">
          <h3 className="text-3xl font-semibold tracking-tight uppercase mb-4">
            FAQ
          </h3>
          <div className="container mx-auto">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <div className="" key={index}>
                  <h3
                    className="mb-2 text-sm cursor-pointer"
                    onClick={() => toggleAnswer(index)}
                  >
                   + {faq.question}
                  </h3>
                  {faq.showAnswer && (
                    <p className="text-sm text-justify transition-all duration-500 mb-3 pl-3 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-3 py-3">
          <a
            href="https://www.behance.net/gddots1"
            class="text-white font-medium rounded-lg shadow-xl hover:scale-105 px-5 py-3 text-center bg-gradient-to-l from-orange-600 to-orange-400 hover:bg-gradient-to-br transition-all duration-1000"
          >
           See More
          </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
