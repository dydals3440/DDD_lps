import useLps from '#/frameworks/hooks/useLps';

export default function Landing() {
  const { lps } = useLps();

  console.log(lps);
  return (
    <h1>
      {lps?.data.map((lp) => {
        return (
          <div key={lp.id}>
            <h2>{lp.content}</h2>
            <p>{lp.title}</p>
          </div>
        );
      })}
    </h1>
  );
}
