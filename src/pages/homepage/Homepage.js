import "./homepage.scss";
import Scorelist from "../../components/listsandcards/Scorelist";
import useFetch from "../../hooks/useFetch";
import Coverunderlists from "../../components/homepage/Coverunderlists";
import IntroductionHomepage from "../../components/homepage/IntroductionHomepage";
export default function Homepage() {
  const titles = [
    ["New songs", "new_uploaded_scores"],
    ["For you", "for_you_scores"],
    ["Most popullar", "most_popular_scores"],
  ];
  const { data, loading, error } = useFetch("/api/v1/scores/home_page_data");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="homepage-container">
      <div className="homepage-top-cover ">
        <h1>Discover the Beauty of Music</h1>
        <img src="images/musicnote.png" />
        <img src="images/cover-girl.png" />
        <img src="images/cello.png" />
      </div>
      <div className="homepage-lists-container">
        <div className="row">
          {titles.map((title) => {
            return (
              <div key={title} className="col-12 col-md-6 col-xl-4">
                <Scorelist props={data[title[1]]} title={title[0]} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Coverunderlists />
      </div>

      <div>
        <IntroductionHomepage />
      </div>

      <div></div>
    </div>
  );
}
