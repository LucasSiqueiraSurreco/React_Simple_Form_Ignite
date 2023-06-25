import {ImgHTMLAttributes} from "react"

import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean
}

/* definindo valor default, so aplica borda quando tem hasBorder */
export function Avatar({ hasBorder = true,...props}: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      onClick={()=>alert("clicou na img msm hein tchonga")}

      /* spread para pegar todos os atributos de img, nao precisa passar
      alt, src etc */
{...props}
    />
  );
}
