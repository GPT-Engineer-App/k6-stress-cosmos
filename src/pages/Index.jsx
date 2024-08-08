import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Cat } from 'lucide-react';

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const catFacts = [
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
    "The first cat in space was a French cat named Felicette in 1963.",
    "Cats can jump up to six times their length."
  ];

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <img 
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-64 rounded-md mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">Did you know?</h2>
        <p className="text-lg mb-6">{catFacts[factIndex]}</p>
        <Button onClick={nextFact} className="w-full">
          <Cat className="mr-2 h-4 w-4" /> Next Cat Fact
        </Button>
      </div>
    </div>
  );
};

export default Index;
