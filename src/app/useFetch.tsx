import { useState, useEffect } from "react";
import { SiteType } from "./types";

const useFetch = (url: string): [SiteType[], boolean, string | null] => {
  const [error, setError] = useState<string | null>(null);
  const [sites, setSites] = useState<SiteType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const NETLIFY_ACCESS_TOKEN = process.env.NEXT_PUBLIC_NETLIFY_ACCESS_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        if (!NETLIFY_ACCESS_TOKEN) {
          throw new Error("Missing access token");
        }
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${NETLIFY_ACCESS_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data: SiteType[] = await response.json();

        setSites(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error:", error.message);
          setError(error.message);
        } else {
          console.error(error);
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, NETLIFY_ACCESS_TOKEN]);
console.log(sites)
  return [sites, loading, error];
};

export default useFetch;
