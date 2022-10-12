import furkan from "../furkan.png";
import serdar from "../serdar.png";
import arda from "../arda.png";
import yagiz from "../yagiz.png";
export default function About() {
  return (
    <div className="who">
      <h2>
        We are the seniors of TED University! We carry this title at school in
        our professional life as well.
      </h2>

      <div>
        <img src={furkan} width="200px" alt="dd"></img>
        <h3 className="h1-n">Furkan ÖZELGE</h3>
        <h4>
          Hello! I am Furkan ÖZELGE, 4th grade Computer Engineering student at
          TED University, has 2 years of professional experience. He worked as a
          Full-Stack Developer at SignumTTE, PYZ, Dill, Aselsan companies, and
          is currently working as a Frontend Developer at Papilon.
        </h4>
        <h4>✉ furkan.ozelge@tedu.edu.tr</h4>

        <img src={yagiz} width="200px" alt="dc"></img>
        <h3 className="h1-n">Yağız Hikmet KARAKUŞ</h3>
        <h4>
          Hello, I am Yağız Karakuş. I'm in my senior year in TEDU Computer
          Engineering. I did my internship in komtas and now I'm currently do my
          internship at PYZ. I am interested in Artificial Intelegence, Deep
          Learning, Computer Vision and Image Processing
        </h4>
        <h4>✉ yhikmet.karakus@tedu.edu.tr</h4>
      </div>
      <img src={serdar} width="200px" alt="cc"></img>
      <h3 className="h1-n">Serdar HOŞVER</h3>
      <h4>
        Hello, I am Serdar Hoşver, a 4th grade Computer Engineering student at
        TED University. I had 9 months of internship experience in AXA Insurance
        Data Warehouse and Data Management Office, currently I am working as a
        BI Consultant at NTT Data.
      </h4>
      <h4>✉ serdar.hosver@tedu.edu.tr</h4>

      <img src={arda} width="200px" alt="cb"></img>
      <h3 className="h1-n">Arda ATAKOL</h3>
      <h4>
        My name is Arda. I am 22 and 3th grade Computer Engineering student in
        TED University. I am planning to go abroad for my post graduate. My aim
        is to be a web developer as free-lance engineer.
      </h4>
      <h4>✉ arda.atakol@tedu.edu.tr</h4>
    </div>
  );
}
