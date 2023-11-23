import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Education
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
          <li class="mb-10" data-aos="zoom-in">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              SMP NEGERI 1 KARANGREJO
            </h3>
            {/* <time class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
              Completed on July 7th, 2023
            </time> */}
            <p class="mb-4 text-base font-normal  text-gray-400">
            Masa SMP adalah bab berikutnya dalam perjalanan pendidikan kita.
            Selama tiga tahun, kita menghadapi tantangan baru dan memperluas wawasan kita.
            Pelajaran menjadi lebih kompleks, teman-teman pun semakin bervariasi, dan kegiatan
            ekstrakurikuler memberikan kesempatan untuk menemukan minat dan bakat.
            Ingat kantin yang ramai dan rasa penasaran kita terhadap ilmu pengetahuan yang semakin mendalam?
            Itu semua bagian dari petualangan SMP. Selain itu, masa ini juga sering kali menjadi waktu
            untuk menemukan identitas diri dan mulai memahami apa yang kita inginkan dalam hidup.
            </p>
            {/* <a
              href="https://www.credly.com/badges/bf6b9024-d4f8-465d-b345-d9b0c5a7abab/public_url"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a> */}
          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              SMA NEGERI 1 KARAS
            </h3>
            {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on May 28th, 2022
            </time> */}
            <p class="text-base font-normal text-gray-400">
            Masa SMA adalah fase kritis di mana kita semakin mendekati ambang dewasa. Dalam tiga tahun ini,
            tantangan akademis semakin meningkat, mempersiapkan kita untuk ujian besar dan pemilihan jurusan.
            Di samping itu, SMA juga menjadi panggung bagi pengembangan kepribadian dan eksplorasi minat.
            Teman-teman menjadi semakin berharga, dan hubungan sosial memainkan peran penting.
            Masa ini juga diwarnai dengan persiapan untuk masa depan, baik melalui pengambilan keputusan
            karir maupun partisipasi dalam berbagai kegiatan ekstrakurikuler. Ingatlah, setiap ujian dan
            keputusan membawa kita lebih dekat pada kematangan dan kesiapan untuk menghadapi dunia setelah SMA...
            </p>
            {/* <a
              href="https://www.freecodecamp.org/certification/Daniel_Jebarson/back-end-development-and-apis"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a> */}
          </li>
          <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              UNIVERSITAS PENDIDIKAN INDONESIA
            </h3>
            {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on December 9, 2022
            </time> */}
            <p class="text-base font-normal text-gray-400">
            Masa kuliah adalah bab baru yang penuh eksplorasi dan pertumbuhan. Di lingkungan kampus,
            kita tidak hanya mendalami bidang studi pilihan, tetapi juga bertemu dengan beragam pikiran dan ide.
            Kebebasan akademis memberi kita kesempatan untuk mengejar minat khusus dan mengasah bakat.
            Selain itu, kehidupan sosial di kampus menjadi arena di mana kita membangun jaringan sosial yang
            mungkin berdampak sepanjang karir kita. Namun, bersamaan dengan kebebasan tersebut, ada juga tanggung
            jawab yang lebih besar dalam mengelola waktu dan mengambil keputusan. Masa kuliah adalah waktu di
            mana kita tidak hanya belajar tentang dunia, tetapi juga tentang diri kita sendiri,
            membentuk fondasi untuk perjalanan dewasa yang akan datang...
            </p>
            
            {/* <a
              target="_blank"
              rel="noreferrer"
              href="https://www.freecodecamp.org/certification/Daniel_Jebarson/front-end-development-libraries"
              class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a> */}
          </li>
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"JavaScript"} percent={65} />
            <BarGraph name={"React"} percent={75} />
            <BarGraph name={"TypeScript"} percent={60} />
            <BarGraph name={"Java"} percent={80} />
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"SQL"} percent={65} />
            <BarGraph name={"AWS"} percent={40} />
          </div>

          {/* <a
            href={require("../../assets/files/Daniel Resume.pdf")}
            download={"Dani's Resume"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a> */}
        </div>
      </div>
    </div>
  );
}
