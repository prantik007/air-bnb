import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import PeopleList from "./components/PeopleList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="card-container">
        {PeopleList.map((people, index) => {
          return (
            <Card
              key={people.id}
              people_img={people.people_img}
              rating={people.rating}
              reviews={people.reviews}
              place={people.place}
              description={people.description}
              price={people.price}
              isAvailable={people.isAvailable}
            />
          );
        })}
      </section>

      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
