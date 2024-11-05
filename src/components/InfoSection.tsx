import { useEffect } from "react";

interface VideoPlayerProps {
  selectedLanguage: string | null;
}

const InfoSection: React.FC<VideoPlayerProps> = ({ selectedLanguage }) => {
  useEffect(() => {}, [selectedLanguage]);

  return (
    <div className="main-section">
      <div className="card-container">
        <div className="container">
          <div className="card-2">
            <div className="card-info">
              <p className="card-info-title">
                გააქრე ზღვარი <br />
                რეალურსა და <br />
                არარეალურს შორის
              </p>
              <p className="card-info-text">
                გადადით იმაზე, თუ როგორ გამოიყურება დიზაინი. აჩვენე ხალხს, როგორ
                გრძნობს თავს. Unreal Engine-ის საშუალებით შეგიძლიათ შექმნათ
                განსაცვიფრებელი დიზაინით, რომლებიც განსაცვიფრებლად რეალურად
                იგრძნობთ თავს და შეისწავლეთ ისინი სიცოცხლისუნარიანი დეტალებით,
                სანამ ოდესმე გატეხავთ.
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
