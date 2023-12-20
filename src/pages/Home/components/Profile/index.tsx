import { ProfileContainer, ImageProfile, Info } from "./style";
import github from "../../../../assets/images/icons/Type=github-brands.svg";
import building from "../../../../assets/images/icons/Type=building-solid.svg";
import followers from "../../../../assets/images/icons/Type=user-group-solid.svg";
import arrowUp from "../../../../assets/images/icons/Type=arrow-up-right-from-square-solid.svg";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { requestParams } from "../../../../configs/apiCall";

const { user } = requestParams;

export function Profile() {
  const [data, setData] = useState({
    name: "",
    login: "",
    bio: "",
    company: "",
    followers: 0,
    avatar_url: "",
  });

  async function getData() {
    const response = await api.get(`users/${user}`);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProfileContainer>
      <ImageProfile>
        <img src={data.avatar_url} alt="avatar" />
      </ImageProfile>
      <Info>
        <header>
          <h1>{data.name}</h1>
          <a href={`https://github.com/${user}`}>
            github
            <img src={arrowUp} />
          </a>
        </header>
        <div>
          <p>{data.bio}</p>
          <ul>
            <li>
              <img src={github} alt="github" />
              {data.login}
            </li>
            {data.company && (
              <li>
                <img src={building} alt="building" />
                {data.company}
              </li>
            )}
            <li>
              <img src={followers} alt="followers" />
              {data.followers} seguidores
            </li>
          </ul>
        </div>
      </Info>
    </ProfileContainer>
  );
}
