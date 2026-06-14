import { useEffect, useState } from "react";


export default function useGithubRepos() {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch("https://api.github.com/users/batak01/repos")
      .then(res => res.json())
      .then(data => {

        if (Array.isArray(data)) {
          setRepos(data.slice(0, 4));
        } else {
          console.error("GitHub API error:", data);
        }

        setLoading(false);

      })
      .catch(err => {

        console.error("Fetch error:", err);
        setLoading(false);

      });


  }, []);


  return {
    repos,
    loading
  };

}