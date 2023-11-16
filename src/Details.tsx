import { useState, useContext, lazy } from "react";
import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import { PetAPIResponse } from "./APIResponsesTypes";

const Modal = lazy(() => import("./Modal"));

const Details = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  if (!id) {
    throw new Error("Details.tsx: no id was provided");
  }
  const results = useQuery<PetAPIResponse>(["details", id], fetchPet);

  if (results.isError) {
    return <h2>Error loading content</h2>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">꩜</h2>
      </div>
    );
  }

  const pet = results?.data?.pets[0];
  if (!pet) {
    throw new Error("Details.tsx: pet results are undefined");
  }

  console.info(pet.images[1]);

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate("/");
                    }}
                  >
                    Yes
                  </button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
      </div>
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
