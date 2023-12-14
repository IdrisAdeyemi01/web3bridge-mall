import React, { useState } from "react";

const Lib = () => {
  const [attires, setAttires] = useState([
    {
      id: 1,
      name: "Ankara Dress",
      likes: 2,
    },

    {
      id: 2,
      name: "Aso Ofi",
      likes: 4,
    },
    {
      id: 3,
      name: "Corporate wear",
      likes: 0,
    },
    {
      id: 4,
      name: "Kimono dress",
      likes: 0,
    },
    {
      id: 5,
      name: "Up and Down",
      likes: 0,
    },
    {
      id: 6,
      name: "Tutu dress",
      likes: 0,
    },
    {
      id: 7,
      name: "Polo dress",
      likes: 0,
    },
    {
      id: 8,
      name: "Agbada Dress",
      likes: 0,
    },
    {
      id: 9,
      name: "Buba dress",
      likes: 0,
    },
    {
      id: 10,
      name: "Female Wears",
      likes: 0,
    },
  ]);

  function handleLikeClick(id) {
    setAttires((prevAttires) => {
      return prevAttires.map((attire) =>
        attire.id === id ? { ...attire, likes: attire.likes + 1 } : attire
      );
    });
  }

  function handleDislikeClick(id) {
    setAttires((prevAttires) => {
      return prevAttires.map((attire) =>
        attire.id === id
          ? { ...attire, likes: Math.max(0, attire.likes - 1) }
          : attire
      );
    });
  }

  function handleDeleteClick(id) {
    setAttires((prevAttires) => {
      return prevAttires.filter((attire) => attire.id !== id);
    });
  }


  return (
    <div className="background">
      <h1>Web3Bridge Mall</h1>
      <div>
        <h2>Fashion Attires</h2>
        <div className="attire-list">
          {attires
            .sort((a, b) => b.likes - a.likes)
            .map((attire) => (
              <div key={attire.id} className="attire-item">
                <h4>{attire.name}</h4>
                <p>{attire.likes}</p>
                <button onClick={() => handleLikeClick(attire.id)}>+</button>
                <button onClick={() => handleDislikeClick(attire.id)}>-</button>
                <button onClick={() => handleDeleteClick(attire.id)}>
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Lib;