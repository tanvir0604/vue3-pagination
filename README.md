# vue3-pagination

> A vue3 component to create a server side pagination system

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

#### Props

| Name              | Type   | Default | Details                                                                     |
|-------------------|--------|---------|-----------------------------------------------------------------------------|
| url               | String | NULL    | Required - Server url from where data will be fetched                       |
| filters           | Object | {}      | Optional - Send all your search options here as a json data                 |
| per-page          | Number | 20      | Optional - This determines how many items will be shown per page            |
| default-page-no   | Number | 1       | Optional - First loaded page number                                         |
| first-button-text | String | First   | Optional - To change the text of first button. Html format allowed          |
| last-button-text  | String | Last    | Optional - To change the text of last button. Html format allowed           |
| next-button-text  | String | '>>'    | Optional - To change the text of next button. Html format allowed           |
| prev-button-text  | String | '<<'    | Optional - To change the text of previous button. Html format allowed       |
| class-name        | String | NULL    | Optional - This is the wrapper class. You can use this to change the design |


#### Events

| Name   | Type   | Default | Details                                                               |
|--------|--------|---------|-----------------------------------------------------------------------|
| update | method | NULL    | Required - This function will be called upon successful fetching data |


Example:

```tsx
<script setup lang="ts">
    import { Pagination } from "@shafkat/vue3-pagination";
    import { ref } from 'vue';
    const url = ref('http://your-api-server-url');
    const className = 'my-pagination';
    const items = ref([]);
    const filters = ref({
    param1: 'value1',
    param2: 'value2'
});
    const update = (res) => {
    console.log(res);
    items.value = res.items;
}
</script>

<template>
    <table class="table">
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        <tr v-for="item in items">
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
        </tr>
    </table>
    <Pagination :url="url" :class-name="className" :filters="filters" @update="update"></Pagination>
</template>

<style>
    .my-pagination .page-link{
    background-color: #2c3e50;
    color: white;
}
    .my-pagination .page-link:hover{
    opacity: .8;
}
    .my-pagination .active .page-link{
    background-color: white;
    color: #2c3e50;
}
</style>

```

> include bootstrap >= 5.0 for styling
> 
> include fontawesome for icons

### Response data from server

| Name   | Default value | Description                                                                                                                                                                  |
|--------| --- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| total_items | 0 | Required - Total number of items should be returned from server. to increase peformance you can do the count query only when you get 0 for this parameter value as a request |

If present, the request will be delayed by the given amount of time

Example:

```json
{
  "total_items": 3,
  "items": [
    {
      "name": "A", "age": 20
    },{
      "name": "B", "age": 25
    },{
      "name": "C", "age": 30
    }
  ]
}
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

* **Md Shafkat Hussain Tanvir** - *Initial work* - [tanvir](https://github.com/tanvir0604)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.