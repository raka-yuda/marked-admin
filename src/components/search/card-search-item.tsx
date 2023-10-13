interface Props {
  title: string;
  description: string;
}

const CardSearchItem = ({ title, description }: Props) => {
  return (
    <figure className="shadow-2xl bg-white rounded-xl p-8 bg-cover mb-4">
      <div className="space-y-4">
        <blockquote>
          <p className="text-md font-semibold">{title}</p>
        </blockquote>
        <figcaption>
          <div>{description}</div>
          {/* <div>Staff Engineer, Algolia</div> */}
        </figcaption>
      </div>
    </figure>
  );
};

export default CardSearchItem;
