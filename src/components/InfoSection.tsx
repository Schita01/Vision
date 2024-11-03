import { useEffect } from "react";

interface VideoPlayerProps {
  selectedLanguage: string | null;
}

const InfoSection: React.FC<VideoPlayerProps> = ({ selectedLanguage }) => {

  useEffect(() => {
  }, [selectedLanguage]);
  
  

  return (
    <div className="main-section">

      {/* ტექსტის განყოფილება scroll-ისთვის */}
{/* 
      <div className="main-info">
        <div className="container">
          <div className="mainc-info-container">
            <span className="main-info-title">Features for architecture</span>
            <p className="main-info-text">
            With Unreal Engine, you can take your data from raw CAD, BIM, or DCC files to stunning immersive 
            real-time experiences and offline-rendered-quality linear media in less time than you thought possible.
             Then, iterate to your heart’s content, react to feedback, and see your changes update in the blink of an eye.
            </p>
          </div>
        </div>
      </div> */}


      <div className="card-container">
        <div className="container">
          <div className="card">
            <div className="card-video"></div>
            <div className="card-info">
              <p className="card-info-title">
                გააქრე ზღვარი <br />
                 რეალურსა და <br />
                 არარეალურს შორის
                
              </p>
              <p className="card-info-text">
                გადადით იმაზე, თუ როგორ გამოიყურება დიზაინი. აჩვენე ხალხს, როგორ გრძნობს თავს. Unreal Engine-ის საშუალებით შეგიძლიათ შექმნათ განსაცვიფრებელი დიზაინით, რომლებიც განსაცვიფრებლად რეალურად იგრძნობთ თავს და შეისწავლეთ ისინი სიცოცხლისუნარიანი დეტალებით, სანამ ოდესმე გატეხავთ.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-container">
        <div className="container">
          <div className="card">
            <div className="card-info">
            <p className="card-info-title">
                გააქრე ზღვარი <br />
                 რეალურსა და <br />
                 არარეალურს შორის
                
              </p>
              <p className="card-info-text">
                გადადით იმაზე, თუ როგორ გამოიყურება დიზაინი. აჩვენე ხალხს, როგორ გრძნობს თავს. Unreal Engine-ის საშუალებით შეგიძლიათ შექმნათ განსაცვიფრებელი დიზაინით, რომლებიც განსაცვიფრებლად რეალურად იგრძნობთ თავს და შეისწავლეთ ისინი სიცოცხლისუნარიანი დეტალებით, სანამ ოდესმე გატეხავთ.
              </p>
            </div>
            <div className="card-video"></div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default InfoSection;
