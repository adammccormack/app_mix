export const Items = ({ items }: any) => {
  return (
    <div>
      {items.map((item: any) => {
        return <h4 key={item.id}>{item.text}</h4>;
      })}
    </div>
  );
};
