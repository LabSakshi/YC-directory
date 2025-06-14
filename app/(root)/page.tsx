import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: {
        _id: 1,
      },
      _id: 1,
      description: "This is a description ",
      image: "",
      category: "Robots",
      title: "We Robots",
    },
  ];
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
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
          <ul className="mt-7 card_grid">
            {posts?.length &&
              posts.map((post) => {
                <li>
                  <StartupCard key={post?._id} post={post} />
                </li>;
              })}
          </ul>
        </p>
      </section>
    </>
  );
};

export default Home;
