import useLps from '#/frameworks/hooks/useLps';
import useUser from '#/frameworks/hooks/useUser';
import { useState } from 'react';

export default function Landing() {
  const { lps } = useLps();
  const { signup, signupLoading } = useUser();
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
    avatar: '',
  });

  const handleChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup({
      name: signupInfo.name,
      email: signupInfo.email,
      password: signupInfo.password,
      bio: signupInfo.bio,
      avatar: signupInfo.avatar,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          value={signupInfo.name}
          onChange={handleChangeInfo}
        />
        <input
          name='email'
          value={signupInfo.email}
          onChange={handleChangeInfo}
        />
        <input
          name='password'
          value={signupInfo.password}
          onChange={handleChangeInfo}
        />
        <input name='bio' value={signupInfo.bio} onChange={handleChangeInfo} />

        <input
          name='avatar'
          value={signupInfo.avatar}
          onChange={handleChangeInfo}
        />
        <button disabled={signupLoading} type='submit'>
          회원가입
        </button>
      </form>
      <h3>
        {lps?.data.map((lp) => {
          return (
            <div key={lp.id}>
              <h2>{lp.content}</h2>
              <p>{lp.title}</p>
            </div>
          );
        })}
      </h3>
    </div>
  );
}
