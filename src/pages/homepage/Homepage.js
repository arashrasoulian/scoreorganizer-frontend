import "./homepage.scss";
import Scorelist from "../../components/listsandcards/Scorelist";
import useFetch from "../../hooks/useFetch";
export default function Homepage() {
  const titles = [
    ["New songs", "new_uploaded_scores"],
    ["For you", "for_you_scores"],
    ["Most popullar", "most_popular_scores"],
  ];
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/v1/scores/home_page_data"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="homepage-container">
      <div className="homepage-top-cover ">
        <h1>Discover the Beauty of Music</h1>
      </div>
      <div className="row homepage-lists-container">
        <div className="col-lg-7 col-12 row">
          {titles.map((title) => {
            return (
              <div key={title} className="col-12 col-md-4 ">
                <Scorelist props={data[title[1]]} title={title[0]} />
              </div>
            );
          })}
        </div>
        <div className="col-lg-2"></div>
        <div className="homepage-ad-container col-12 col-md-4 col-lg-3 mt-2">
          <div className="homepage-ad-backgroundcolor">
            advertisement
            <div className="homepage-ad-image"></div>
          </div>
        </div>

        <div>
          <div className="introduction-homepage-title ">
            SHEET MUSIC TO DOWNLOAD, PRINT & PLAY FROM ANYWHERE
          </div>
          <div className="introduction-homepage-first-container">
            <div className="introduction-homepage-first-picture"></div>
            <div className="introduction-homepage-verticalline"></div>
            <div className="introduction-homepage-text">
              <h6>Find Your Song</h6>
              <p className="mt-4">
                Find the sheet music you're looking for- from beginner to pro,
                Bach to Prince, and banjo to piano- available in any key.
              </p>
            </div>
          </div>

          <div className="introduction-homepage-second-container">
            <div className="introduction-homepage-second-picture"></div>
            <div className="introduction-homepage-verticalline"></div>
            <div className="introduction-homepage-text">
              <h6>Print Instantly</h6>
              <p className="mt-4">
                Checkout and print instantly from your desktop or mobile device
                with our quick and easy purchase process.
              </p>
            </div>
          </div>
          <div className="introduction-homepage-third-container">
            <div className="introduction-homepage-third-picture"></div>
            <div className="introduction-homepage-verticalline"></div>
            <div className="introduction-homepage-text">
              <h6>Access Anywhere</h6>
              <p className="mt-4">
                Play, transpose and mark up your sheet music anywhere with our
                free interactive apps for iOS, Android, Mac and PC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
