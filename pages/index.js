import PageTitle from "../components/PageTitle";
import Hero from "../components/Hero";
import ToDo from "../components/ToDo";

export default function Home() {
  return (
    <>
      <PageTitle title="Welcome to My Next Website" />
      <Hero heroTitle="Home banner text" bannerUrl="banner1" />
      <h1>Home</h1>
      <ToDo />
    </>
  );
}
