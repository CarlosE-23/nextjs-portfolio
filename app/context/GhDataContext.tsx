import { createContext, useContext, useState, useEffect } from "react";
import { IGhData } from "@/types/ghData.interface";

const GhDataContext = createContext<IGhData | undefined>(undefined);

export const GhDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [ghData, setGhData] = useState<IGhData>({} as IGhData);

  console.log(ghData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/carlose-23",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGhData(data);
        console.log("GitHub data fetched:", data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <GhDataContext.Provider value={ghData}>{children}</GhDataContext.Provider>
  );
};

export const useGhData = () => {
  const context = useContext(GhDataContext);
  if (context === undefined) {
    throw new Error("useGhData must be used within a GhDataProvider");
  }
  return context;
};
