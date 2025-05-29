import SearchForm from "../components/SearchForm";
const Home = () => {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          {" "}
          <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Idea, Vote for Pitches, and Get NOticed in Virtual Competitions
        </p>
        <SearchForm />
      </section>
    </>
  );
};

export default Home;
