import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { ContentList } from "./components/ContentList";
import { Container } from "../../styles/global";
import { api } from "../../lib/axios";
import { useState, useEffect } from "react";
import { requestParams } from "../../configs/apiCall";

const { user, repo } = requestParams;

export function Home() {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);

  async function getData() {
    const response = await api.get(`search/issues?q=repo:${user}/${repo}
    `);
    let dataFilteredOpen = response.data.items.filter(
      (issue: any) => issue.state === "open"
    );
    setData(dataFilteredOpen);
    setDataFiltered(dataFilteredOpen);
  }

  useEffect(() => {
    getData();
  }, []);

  function filterIssues(filterParam: string) {
    const lowerCaseFilterParam = filterParam.toLowerCase();

    const dataFiltered = data.filter((issue: any) =>
      issue.title.toLowerCase().includes(lowerCaseFilterParam)
    );
    setDataFiltered(dataFiltered);
  }

  return (
    <main>
      <Container>
        <Profile />
        <SearchBar
          numberOfPublications={dataFiltered.length}
          filterIssues={filterIssues}
        />
        <ContentList data={dataFiltered} />
      </Container>
    </main>
  );
}
