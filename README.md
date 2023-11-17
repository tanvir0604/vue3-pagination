# vue3-pagination

> A vue3 component to create a server side pagination system

## Table of contents

- [Project Name](#project-name)
   - [Table of contents](#table-of-contents)
   - [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Usage](#usage)
      - [Serving the app](#serving-the-app)
      - [Running the tests](#running-the-tests)
      - [Building a distribution version](#building-a-distribution-version)
      - [Serving the distribution version](#serving-the-distribution-version)
   - [API](#api)
      - [useBasicFetch](#usebasicfetch)
         - [Options](#options)
      - [fetchData](#fetchdata)
   - [Contributing](#contributing)
   - [Credits](#credits)
   - [Built With](#built-with)
   - [Versioning](#versioning)
   - [Authors](#authors)
   - [License](#license)

## Getting Started

These instructions will help you to install the package on your local machine and create a server side pagination system in a minute.

## Installation

installation process is very simple:

```sh
$ cd PROJECT
$ npm i @shafkat/vue3-pagination
```

## Usage

### Import the component

```sh
$ import Pagination from "vue3-pagination";
```

### Use the component

```sh
$ <Pagination url="your_server_url" class-name="test"></Pagination>
```

## API

#### Options

| Name            | Type   | Default | Details                                                          |
|-----------------|--------|---------|------------------------------------------------------------------|
| url             | String | NULL    | Required - Server url from where data will be fetched            |
| filters         | Object | {}      | Optional - Send all your search options here as a json data      |
| per-page        | Number | 20      | Optional - This determines how many items will be shown per page |
| default-page-no | Number | 1       | Optional                                                         |


If present, the request will be performed as soon as the component is mounted

Example:

```tsx
const MyComponent: React.FC = () => {
  const { data, error, loading } = useBasicFetch('https://api.icndb.com/jokes/random');

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
      {data && data.value && <p>{data.value.joke}</p>}
    </div>
  );
};
```

`delay`

| Type | Default value | Description |
| --- | --- | --- |
| number | 0 | Time in milliseconds |

If present, the request will be delayed by the given amount of time

Example:

```tsx
type Joke = {
  value: {
    id: number;
    joke: string;
  };
};

const MyComponent: React.FC = () => {
  const { data, error, loading } = useBasicFetch<Joke>('https://api.icndb.com/jokes/random', 2000);

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
      {data && data.value && <p>{data.value.joke}</p>}
    </div>
  );
};
```

### fetchData

```js
fetchData(url: string)
```

Perform an asynchronous http request against a given url

```tsx
type Joke = {
  value: {
    id: number;
    joke: string;
  };
};

const ChuckNorrisJokes: React.FC = () => {
  const { data, fetchData, error, loading } = useBasicFetch<Joke>();
  const [jokeId, setJokeId] = useState(1);

  useEffect(() => {
    fetchData(`https://api.icndb.com/jokes/${jokeId}`);
  }, [jokeId, fetchData]);

  const handleNext = () => setJokeId(jokeId + 1);

  if (error) {
    return <p>Error</p>;
  }

  const jokeData = data && data.value;

  return (
    <div className="Comments">
      {loading && <p>Loading...</p>}
      {!loading && jokeData && (
        <div>
          <p>Joke ID: {jokeData.id}</p>
          <p>{jokeData.joke}</p>
        </div>
      )}
      {!loading && jokeData && !jokeData.joke && <p>{jokeData}</p>}
      <button disabled={loading} onClick={handleNext}>
        Next Joke
      </button>
    </div>
  );
};
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

TODO: Write credits

## Built With

* Dropwizard - Bla bla bla
* Maven - Maybe
* Atom - ergaerga
* Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **John Doe** - *Initial work* - [JohnDoe](https://github.com/JohnDoe)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY