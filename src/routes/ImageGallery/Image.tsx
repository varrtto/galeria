import styles from "./ImageGallery.module.css";

interface Props {
  src: string;
}

const Image = (props: Props) => {
  const { src } = props;
  return (
    <div>
      <img src={src} className={styles.img} />
    </div>
  );
};

export default Image;
