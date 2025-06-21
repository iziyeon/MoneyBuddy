interface Props {
  thumbnail: string;
  category: string;
  categoryColor?: string;
  title: string;
  author: string;
  date: string;
}

export default function MagazineCard({
  thumbnail,
  category,
  categoryColor = '#6488FF',
  title,
  author,
  date,
}: Props) {
  return (
    <div className="flex gap-3 p-3 bg-white rounded-xl shadow-sm">
      <img
        src={thumbnail}
        alt="thumb"
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="flex flex-col justify-between flex-1">
        <span
          className="text-[12px] font-semibold"
          style={{ color: categoryColor }}
        >
          {category}
        </span>
        <p className="text-[14px] font-medium text-black">{title}</p>
        <span className="text-[12px] text-[#999]">
          {author} · {date}
        </span>
      </div>
    </div>
  );
}
