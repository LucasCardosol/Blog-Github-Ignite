import { ContentListContainer } from "./style";
import { Link } from "react-router-dom";
import { formatDateDistance } from "../../../../utils/formatDate";

export function ContentList({ data }: any) {
  return (
    <ContentListContainer>
      <ul>
        {data.map((issue: any) => (
          <li key={issue.id}>
            <Link to={`/publication/${issue.number}`}>
              <header>
                <h2>{issue.title}</h2>
                <span>{formatDateDistance(issue.created_at)}</span>
              </header>
              <p>{issue.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </ContentListContainer>
  );
}
