import { Container } from "../../styles/global";
import { ContentInfo, MarkdownContainer } from "./style";
import arrow from "../../assets/images/icons/Type=chevron-left-solid.svg";
import arrowUp from "../../assets/images/icons/Type=arrow-up-right-from-square-solid.svg";
import github from "../../assets/images/icons/Type=github-brands.svg";
import calendar from "../../assets/images/icons/Type=calendar-day-solid.svg";
import comment from "../../assets/images/icons/Type=comment-solid.svg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../lib/axios";
import Markdown from "react-markdown";
import { requestParams } from "../../configs/apiCall";
import { formatDateDistance } from "../../utils/formatDate";

const { user, repo } = requestParams;

interface dataType {
  title: string;
  created_at: string;
  comments: number;
  body: string;
}

export function Publication() {
  const [data, setData] = useState<dataType>({
    title: "",
    created_at: "",
    comments: 0,
    body: "",
  });

  const { number } = useParams();

  async function getData() {
    const response = await api.get(`repos/${user}/${repo}/issues/${number}`);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Container>
        <ContentInfo>
          <header>
            <Link to="/">
              <img src={arrow} />
              voltar
            </Link>
            <Link to="https://github.com/">
              ver no github
              <img src={arrowUp} />
            </Link>
          </header>
          <h1>{data.title}</h1>
          <ul>
            <li>
              <img src={github} />
              camerownwll
            </li>
            <li>
              <img src={calendar} />
              {formatDateDistance(data.created_at)}
            </li>
            <li>
              <img src={comment} />
              {`${data.comments} comentário(s)`}
            </li>
          </ul>
        </ContentInfo>
        <MarkdownContainer>
          <Markdown skipHtml>{data.body}</Markdown>
        </MarkdownContainer>
      </Container>
    </main>
  );
}
