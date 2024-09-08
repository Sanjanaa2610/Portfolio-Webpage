import React from "react";

const Education = () => {
  return (
    <>
      <div id="education">
        <div className=" mt-24 flex flex-col text-white text-center mx-28 md-4">
          <h1 className=" font-semibold text-5xl text-gray-400">EDUCATION</h1>
        </div>

        <table className=" text-white text-center mx-28 mt-8">
          <tr className="mb-4">
            <td className=" font-bold text-xl py-8">
              Master of Business Administration (MBA) - Finance & Business
              Analytics Army Institute of Management, Kolkata 2023 - 2025
              (Pursuing)
            </td>
            <td className="text-xl">
              As a 2nd-year MBA student specializing in Finance with a minor in
              Business Analytics, I have developed a strong foundation in
              financial analysis, investment management, and business analytics.
              My coursework includes advanced financial management, portfolio
              optimization, financial modeling, and data analytics, which has
              honed my analytical and strategic skills. I was awarded the
              prestigious Prime Minister's Scholarship for academic excellence.
            </td>
          </tr>
          <tr className="mb-4">
            <td className=" font-bold text-xl py-8">
              Bachelor of Business Administration (BBA) - Finance Amity Global
              Business School, Pune 2020 - 2023 | Percentage: 81.30%
            </td>
            <td className="text-xl">
              I completed my BBA with a focus on finance, gaining expertise in
              corporate finance, financial planning, and market analysis. My
              academic performance earned me recognition in the form of
              scholarships. Throughout my undergraduate studies, I actively
              participated in practical finance projects and industry
              internships to solidify my understanding of the corporate world.
            </td>
          </tr>
          <tr className="mb-4">
            <td className=" font-bold text-xl py-8">
              Class XII (CBSE) Army Public School Cantt, Kanpur 2020 |
              Percentage: 85%{" "}
            </td>
            <td className="text-xl">
              In my final year of schooling, I demonstrated strong academic
              performance, particularly in commerce subjects, which provided me
              with a solid foundation for pursuing higher education in business.
              I also received a scholarship from the Army Welfare Education
              Society (AWES) for outstanding performance. Additionally, I
              participated in school-level business competitions and managed
              student initiatives.
            </td>
          </tr>
          <tr className="mb-4">
            <td className=" font-bold text-xl py-8">
              Class X (CBSE) Army Public School Cantt, Kanpur 2018 | Percentage:
              85%
            </td>
            <td className="text-xl">
              During my early schooling years, I maintained consistent academic
              performance, securing a scholarship from AWES for excellence.
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Education;
