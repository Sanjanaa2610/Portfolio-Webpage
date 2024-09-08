import React from "react";

const Internship = () => {
  return (
    <>
      <div id="internship">
        <div className=" mt-24 flex flex-col text-white text-center mx-28">
          <h1 className=" font-semibold text-5xl text-gray-400">INTERNSHIPS</h1>

          <div className="Card-Intern text-xl mt-8">
            <div className="logo size-40 flex justify-center w-full">
              <img src="/hdfc.png" alt="HDFC Bank Logo" srcset="" />
            </div>

            <h2 className="font-bold my-2 text-2xl">
              Summer Internship at HDFC Bank, Koregaon Park, Pune Marketing
              Intern | 2 Months
            </h2>
            <ul className="list-disc text-left">
              <li className="p-2">
                Conducted market research to analyze customer preferences and
                trends in Personal Loan.
              </li>
              <li className="p-2">
                Collaborated with the finance team to assess the impact of
                marketing campaigns on Personal Loan and financial services.
              </li>
              <li className="p-2">
                Generated leads and completed 90% of the target assigned in 2
                months.
              </li>
            </ul>
          </div>

          <div className="Card-Intern text-xl mt-8">
            <div className="logo size-40 flex justify-center w-full">
              <img src="/sbi.png" alt="SBI Logo" srcset="" />
            </div>

            <h2 className="font-bold my-2">
              Summer Internship at State Bank of India, Local Head Office,
              Kolkata Finance Intern | 2 Months{" "}
            </h2>
            <ul className="list-disc text-left">
              <li className="p-2">
                Conducted comprehensive research on the SARFAESI Act and its
                implications for financial institutions in asset recovery and
                loan management.{" "}
              </li>
              <li className="p-2">
                Assisted in preparing financial reports, analyzing
                non-performing assets (NPAs) and their impact on banking
                operations.
              </li>
              <li className="p-2">
                Worked closely with the legal and finance teams to understand
                the implementation of the SARFAESI Act in asset restructuring
                and recovery processes.
              </li>
            </ul>
          </div>

          <div className="Card-Intern text-xl mt-8">
            <div className="logo size-40 flex justify-center w-full">
              <img src="/vify.png" alt="Vify Logo" srcset="" />
            </div>

            <h2 className="font-bold my-2">
              Internship at Vify, Campus Representative | 2 Months{" "}
            </h2>
            <ul className="list-disc text-left">
              <li className="p-2">
                Promoted Vify's spoken English platform among university
                students, increasing awareness and user engagement.
              </li>
              <li className="p-2">
                Organized communication skill workshops and language practice
                sessions to encourage participation.
              </li>
              <li className="p-2">
                Provided feedback to Vify's development team to enhance user
                experience based on student interactions.
              </li>
            </ul>
          </div>

          <div className="Card-Intern text-xl my-8">
            <div className="logo size-52 flex justify-center w-full">
              <img src="/mun.png" alt="Model United Nations" srcset="" />
            </div>
            <h2 className="font-bold my-2">
              Internship at International MUN, Campus Representative{" "}
            </h2>
            <ul className="list-disc text-left">
              <li className="p-2">
                Organized and managed campus-level debates and sessions, helping
                students develop public speaking and negotiation skills.{" "}
              </li>
              <li className="p-2">
                Coordinated events and discussions on global issues, encouraging
                active participation from diverse student groups.
              </li>
              <li className="p-2">
                Promoted the MUN platform and ensured consistent attendance and
                engagement in all organized sessions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Internship;
