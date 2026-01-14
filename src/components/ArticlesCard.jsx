const ArticlesCard = ({ arti_image, arti_category, arti_title, arti_desc }) => {
  return (
    <div className="rounded-xl bg-light-gray h-full">
      <div className="aspect-800/450 overflow-hidden">
        <img width="800" height="450" src={arti_image} loading="lazy" decoding="async" alt={arti_title} />
      </div>
      <div className="p-6">
        <p className="text-gray text-base">{arti_category}</p>
        <h4 className="text-4xl font-semibold text-black leading-relaxed">{arti_title}</h4>
        <p className="text-base text-black">{arti_desc}</p>
      </div>
    </div>
  );
};

export default ArticlesCard;
