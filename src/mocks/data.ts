import { Movie, MovieResponse, MovieDetail } from '@/types/movie';

// 인기 영화 목업 데이터
export const popularMovies: MovieResponse = {
  page: 1,
  results: [
    {
      id: 1,
      title: '인셉션',
      overview: '꿈 속에서 타인의 생각을 훔치는 특수 기술을 가진 돔 코브는 이번에는 사람의 마음속에 생각을 심어야 하는 미션을 받는다.',
      poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
      release_date: '2010-07-16',
      vote_average: 8.4,
      vote_count: 31702,
      popularity: 108.992,
      genre_ids: [28, 53, 878]
    },
    {
      id: 2,
      title: '다크 나이트',
      overview: '배트맨과 짐 고든 형사, 그리고 고든 형사의 후임 하비 덴트는 골함시를 범죄 조직으로부터 완전히 구하기 위해 혼신의 힘을 다한다. 하지만 그들의 노력은 조커의 등장으로 혼란에 빠진다.',
      poster_path: '/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
      backdrop_path: '/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
      release_date: '2008-07-18',
      vote_average: 8.5,
      vote_count: 28997,
      popularity: 75.604,
      genre_ids: [28, 80, 18, 53]
    },
    {
      id: 3,
      title: '기생충',
      overview: '전원 백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 기회가 될 것 같다.',
      poster_path: '/igw938inb6Fy0YVcwIyxQ7Lu5mn.jpg',
      backdrop_path: '/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
      release_date: '2019-05-30',
      vote_average: 8.5,
      vote_count: 14996,
      popularity: 64.895,
      genre_ids: [35, 53, 18]
    },
    {
      id: 4,
      title: '어벤져스: 엔드게임',
      overview: '인피니티 워 이후 절반만 남은 지구에서 어벤져스는 마지막 희망을 걸고 타노스에 맞서 싸운다.',
      poster_path: '/n78LK2t1uQP68Ud0VXHRe0HmKOp.jpg',
      backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      release_date: '2019-04-24',
      vote_average: 8.3,
      vote_count: 23267,
      popularity: 204.338,
      genre_ids: [28, 12, 878]
    },
    {
      id: 5,
      title: '매트릭스',
      overview: '해커 네오는 모르피어스를 만나 진실을 깨닫게 된다. 인류가 기계에 의해 지배당하고 있으며, 가상현실 속에서 살고 있다는 것.',
      poster_path: '/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg',
      backdrop_path: '/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg',
      release_date: '1999-03-31',
      vote_average: 8.2,
      vote_count: 22186,
      popularity: 80.373,
      genre_ids: [28, 878]
    },
    {
      id: 6,
      title: '인터스텔라',
      overview: '가까운 미래, 지구는 황폐해지고 인류는 멸종 위기에 처한다. NASA의 전 조종사 쿠퍼는 우주로 떠나 새로운 인류의 터전을 찾는 임무를 맡는다.',
      poster_path: '/zUIID1yUDxXqm8xzLAYlUdQClLq.jpg',
      backdrop_path: '/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
      release_date: '2014-11-05',
      vote_average: 8.4,
      vote_count: 30645,
      popularity: 125.347,
      genre_ids: [12, 18, 878]
    },
    {
      id: 7,
      title: '라이온 킹',
      overview: '어린 사자 심바는 삼촌 스카의 음모로 아버지를 잃고 쫓겨난다. 그는 성장 후 자신의 진정한 운명을 깨닫고 왕국을 되찾기 위해 돌아온다.',
      poster_path: '/2bXbqYdUdpkFgEwsdO9RN2U7cT0.jpg',
      backdrop_path: '/sj6oT8s7c4qlhj3YQz5XTgNXEKP.jpg',
      release_date: '1994-06-24',
      vote_average: 8.3,
      vote_count: 15818,
      popularity: 72.193,
      genre_ids: [16, 10751, 18]
    },
    {
      id: 8,
      title: '토이 스토리',
      overview: '장난감들은 사람이 없을 때 살아 움직인다. 우디는 앤디의 가장 소중한 장난감이었지만, 새로운 장난감 버즈 라이트이어의 등장으로 위기를 맞는다.',
      poster_path: '/4hc8NHkltTBZjVXsN9MncF4eSqD.jpg',
      backdrop_path: '/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg',
      release_date: '1995-10-30',
      vote_average: 8.0,
      vote_count: 16238,
      popularity: 86.924,
      genre_ids: [16, 12, 10751, 35]
    },
    {
      id: 9,
      title: '원스 어폰 어 타임 인 할리우드',
      overview: '1969년 할리우드, TV 시리즈 스타였던 릭 달튼과 그의 스턴트 더블 클리프 부스는 명성을 잃어가는 시점에서 새로운 시작을 모색한다.',
      poster_path: '/9QT3Pv3TdWphL7wJkPXY2mRRXTZ.jpg',
      backdrop_path: '/jOYnGphTXvmnYOV5gePQZnKM9W5.jpg',
      release_date: '2019-07-26',
      vote_average: 7.5,
      vote_count: 11258,
      popularity: 47.831,
      genre_ids: [35, 18]
    },
    {
      id: 10,
      title: '아바타',
      overview: '제이크 설리는 척추 부상으로 하반신이 마비된 전직 해병이다. 그는 지구에서 149억 6,000만 킬로미터 떨어진 행성 판도라에서 벌어지는 아바타 프로그램에 참가한다.',
      poster_path: '/zygmx5abXeDpr3fWYX4jlXFZ1wh.jpg',
      backdrop_path: '/tXHpvlr5F7gV5DwgS7M5HBrUi2C.jpg',
      release_date: '2009-12-17',
      vote_average: 7.6,
      vote_count: 28965,
      popularity: 133.561,
      genre_ids: [28, 12, 14, 878]
    }
  ],
  total_pages: 500,
  total_results: 10000
};

// 영화 상세 정보 목업 데이터
export const movieDetails: { [key: string]: MovieDetail } = {
  '1': {
    id: 1,
    title: '인셉션',
    overview: '꿈 속에서 타인의 생각을 훔치는 특수 기술을 가진 돔 코브는 이번에는 사람의 마음속에 생각을 심어야 하는 미션을 받는다. 불가능에 가까운 미션을 위해 그는 각자 다른 능력을 가진 전문가들을 모아 팀을 구성한다. 이들의 목표는 거대 기업의 후계자에게 아버지의 회사를 해체하라는 생각을 심는 것. 중요한 것은 꿈과 현실의 경계를 지키는 것이지만, 이는 코브에게 가장 어려운 일이 될 것이다.',
    poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    release_date: '2010-07-16',
    vote_average: 8.4,
    vote_count: 31702,
    popularity: 108.992,
    genre_ids: [28, 53, 878],
    genres: [
      { id: 28, name: '액션' },
      { id: 53, name: '스릴러' },
      { id: 878, name: 'SF' }
    ],
    runtime: 148,
    budget: 160000000,
    revenue: 836800000,
    status: 'Released',
    tagline: '꿈은 생각보다 강렬하게 남는다',
    videos: {
      results: [
        {
          id: 'v1',
          key: 'YoHD9XEInc0',
          name: '인셉션 공식 트레일러',
          site: 'YouTube',
          type: 'Trailer'
        }
      ]
    },
    credits: {
      cast: [
        {
          id: 101,
          name: '레오나르도 디카프리오',
          character: '돔 코브',
          profile_path: '/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
          order: 0
        },
        {
          id: 102,
          name: '조셉 고든 레빗',
          character: '아서',
          profile_path: '/zSuXObNzDm8ynGaHpPjuzTDwQg1.jpg',
          order: 1
        },
        {
          id: 103,
          name: '엘렌 페이지',
          character: '아리아드네',
          profile_path: '/vDZCVWI5fBsM0MJkcEVpUJcIvSk.jpg',
          order: 2
        },
        {
          id: 104,
          name: '톰 하디',
          character: '임스',
          profile_path: '/yqFGC7KVggRzdKjCGmZpNYVpzGI.jpg',
          order: 3
        }
      ],
      crew: [
        {
          id: 201,
          name: '크리스토퍼 놀란',
          job: 'Director',
          department: 'Directing',
          profile_path: '/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
        },
        {
          id: 202,
          name: '크리스토퍼 놀란',
          job: 'Producer',
          department: 'Production',
          profile_path: '/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
        },
        {
          id: 203,
          name: '크리스토퍼 놀란',
          job: 'Screenplay',
          department: 'Writing',
          profile_path: '/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
        }
      ]
    },
    similar: {
      results: popularMovies.results.slice(1, 5)
    },
    recommendations: {
      results: popularMovies.results.slice(3, 7)
    }
  },
  '2': {
    id: 2,
    title: '다크 나이트',
    overview: '범죄와 부정부패가 만연한 고담시를 지키는 배트맨과 짐 고든 형사, 그리고 고든 형사의 후임 하비 덴트는 도시를 범죄 조직으로부터 완전히 구하기 위해 혼신의 힘을 다한다. 하지만 그들의 노력은 미친 악당 조커의 등장으로 혼란에 빠진다. 조커는 배트맨을 죽이기 위해 무고한 시민들을 살해하고, 고담시 전체를 혼돈 속으로 몰아넣는다.',
    poster_path: '/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
    backdrop_path: '/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
    release_date: '2008-07-18',
    vote_average: 8.5,
    vote_count: 28997,
    popularity: 75.604,
    genre_ids: [28, 80, 18, 53],
    genres: [
      { id: 28, name: '액션' },
      { id: 80, name: '범죄' },
      { id: 18, name: '드라마' },
      { id: 53, name: '스릴러' }
    ],
    runtime: 152,
    budget: 185000000,
    revenue: 1005973645,
    status: 'Released',
    tagline: '왜 이렇게 심각해?',
    videos: {
      results: [
        {
          id: 'v2',
          key: 'EXeTwQWrcwY',
          name: '다크 나이트 공식 트레일러',
          site: 'YouTube',
          type: 'Trailer'
        }
      ]
    },
    credits: {
      cast: [
        {
          id: 201,
          name: '크리스찬 베일',
          character: '브루스 웨인 / 배트맨',
          profile_path: '/AcijURXWrA8Nn1XvjEUGyDQEqIp.jpg',
          order: 0
        },
        {
          id: 202,
          name: '히스 레저',
          character: '조커',
          profile_path: '/5Y9HnYYa9jF4NunY9lSgJGjSe8E.jpg',
          order: 1
        },
        {
          id: 203,
          name: '애론 에크하트',
          character: '하비 덴트 / 투페이스',
          profile_path: '/9H8CMD8Rp3qN8a9qJMiUEJ53l0i.jpg',
          order: 2
        },
        {
          id: 204,
          name: '마이클 케인',
          character: '알프레드 페니워스',
          profile_path: '/z3gX4CFi2IRCN8NQBk5lBgdw7pG.jpg',
          order: 3
        }
      ],
      crew: [
        {
          id: 301,
          name: '크리스토퍼 놀란',
          job: 'Director',
          department: 'Directing',
          profile_path: '/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
        },
        {
          id: 302,
          name: '크리스토퍼 놀란',
          job: 'Producer',
          department: 'Production',
          profile_path: '/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
        },
        {
          id: 303,
          name: '크리스토퍼 놀란',
          job: 'Screenplay',
          department: 'Writing',
          profile_path: '/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
        }
      ]
    },
    similar: {
      results: popularMovies.results.slice(2, 6)
    },
    recommendations: {
      results: popularMovies.results.slice(0, 4)
    }
  },
  '3': {
    id: 3,
    title: '기생충',
    overview: '전원 백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 기회가 될 것 같다. 온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우. 글로벌 IT기업 CEO인 박사장의 저택에 도착하자 젊고 아름다운 연교(조여정)가 기우를 맞이한다. 그러나 이렇게 시작된 두 가족의 만남 뒤로, 걷잡을 수 없는 사건이 기다리고 있었으니…',
    poster_path: '/igw938inb6Fy0YVcwIyxQ7Lu5mn.jpg',
    backdrop_path: '/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
    release_date: '2019-05-30',
    vote_average: 8.5,
    vote_count: 14996,
    popularity: 64.895,
    genre_ids: [35, 53, 18],
    genres: [
      { id: 35, name: '코미디' },
      { id: 53, name: '스릴러' },
      { id: 18, name: '드라마' }
    ],
    runtime: 132,
    budget: 11400000,
    revenue: 257764799,
    status: 'Released',
    tagline: '모두가 기생한다',
    videos: {
      results: [
        {
          id: 'v3',
          key: 'SEUXfbo1zQQ',
          name: '기생충 메인 예고편',
          site: 'YouTube',
          type: 'Trailer'
        }
      ]
    },
    credits: {
      cast: [
        {
          id: 301,
          name: '송강호',
          character: '김기택',
          profile_path: '/pI8S6WzPVmuq6JXczvY5rQWDJiI.jpg',
          order: 0
        },
        {
          id: 302,
          name: '이선균',
          character: '박동익',
          profile_path: '/5Iu0gEzC1CxIHJsJ8GdXCQBdPAP.jpg',
          order: 1
        },
        {
          id: 303,
          name: '조여정',
          character: '최연교',
          profile_path: '/lQC14OWMJgnX4NZ94o08xdPJZ7q.jpg',
          order: 2
        },
        {
          id: 304,
          name: '최우식',
          character: '김기우',
          profile_path: '/fUCIj47O3v27NrGlMmDGDJnp4do.jpg',
          order: 3
        }
      ],
      crew: [
        {
          id: 401,
          name: '봉준호',
          job: 'Director',
          department: 'Directing',
          profile_path: '/j8UyQL5XIeGXJroC8Avkk5gqEXF.jpg'
        },
        {
          id: 402,
          name: '봉준호',
          job: 'Producer',
          department: 'Production',
          profile_path: '/j8UyQL5XIeGXJroC8Avkk5gqEXF.jpg'
        },
        {
          id: 403,
          name: '봉준호',
          job: 'Screenplay',
          department: 'Writing',
          profile_path: '/j8UyQL5XIeGXJroC8Avkk5gqEXF.jpg'
        }
      ]
    },
    similar: {
      results: popularMovies.results.slice(4, 8)
    },
    recommendations: {
      results: popularMovies.results.slice(1, 5)
    }
  }
};

// 영화 검색 결과 모의 데이터
export const mockSearchResults = (query: string): MovieResponse => {
  const filteredMovies = popularMovies.results.filter(movie => 
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return {
    page: 1,
    results: filteredMovies,
    total_pages: 1,
    total_results: filteredMovies.length
  };
};
