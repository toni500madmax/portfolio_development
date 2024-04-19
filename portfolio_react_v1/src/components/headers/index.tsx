import { ContainerApp } from "../../styleGlobal/StyleGlobal";
import { ContainFlex, UL } from "./Style";
import ListLinks from "./link_list";
import SocialLinks from "./social_links";

const LinksBar = () => {
  return (
    <ContainerApp>
      <ContainFlex>
        <UL>
          <SocialLinks Href="#" Target="_self" />
          <ListLinks Href="#" Target="_self">
            myLinks
          </ListLinks>
          <ListLinks Href="#" Target="_self">
            about
          </ListLinks>
        </UL>
      </ContainFlex>
    </ContainerApp>
  );
};

export default LinksBar;
