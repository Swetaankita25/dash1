const data = [
  {
    id: 1,
    news: "POK is cannot be a part of India, says PM Modi in Lok Sabha",
  },
  {
    id: 2,
    news: "India's GDP growth rate for 2023-24 is projected at 6.5%: IMF",
  },
  {
    id: 3,
    news: "Reserve Bank of India (RBI) to hold key policy rate at 6.5% in upcoming meeting",
  },
  {
    id: 4,
    news: "India's population to reach 1.5 billion by 2030, says UN report",
  },
  {
    id: 5,
    news: "India's space agency ISRO successfully launches Chandrayaan-3 mission to the Moon",
  },
  {
    id: 6,
    news: "India's first indigenous electric car, the Tata Nexon EV, launched with a range of 312 km",
  },
  {
    id: 7,
    news: "India's cricket team wins the ICC T20 World Cup 2024, defeating England in the final",
  },
  {
    id: 8,
    news: "India's first 5G network launched in major cities, promising faster internet speeds",
  },
  {
    id: 9,
    news: "India's first COVID-19 vaccine, Covaxin, receives emergency use authorization",
  },
  {
    id: 10,
    news: "India's first solar-powered train, the Deen Dayal Express, inaugurated in Madhya Pradesh",
  },
];

// write a function to find news by id
function findNews(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == 1) {
      return data[i].news;
    }
  }
}
console.log(findNews(data, 1));
//write a function to print only number of news(from top)
function getlimit(data, index) {
  data.slice(0, index);
  return data.slice(0, index);
}
console.log(getlimit(data, 2));
//write a function to print only number of news(from bottom)
function bgetlimit(data, index) {
  const last = data.length;
  return data.slice(last - index, last);
}
console.log(bgetlimit(data, 2));
//write a function to search news and show valid list matches
function search(data, keyword) {
  for (let i = 0; i < data.length; i++) {
    const n = [];
    if (
      (data[i].news, data[i].news.toLowerCase().includes(keyword.toLowerCase()))
    ) {
      n.push(data[i]);
    }
    if (n.length === 0) {
      return 0;
    }
    return n;
  }
}
console.log(search(data, "India"));
