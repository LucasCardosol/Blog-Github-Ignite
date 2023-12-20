import { useState } from "react";
import { SearchBarContainer } from "./style";
import { FormEvent } from "react";

interface numberType {
  numberOfPublications: number;
  filterIssues: (filterParam: string) => void;
}

export function SearchBar({ numberOfPublications, filterIssues }: numberType) {
  const [titleValue, setTitleValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterIssues(titleValue);
  };

  return (
    <SearchBarContainer>
      <header>
        <h3>Publicações</h3>
        <span>{`${numberOfPublications} publicação(s)`}</span>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Buscar conteúdo"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
      </form>
    </SearchBarContainer>
  );
}
