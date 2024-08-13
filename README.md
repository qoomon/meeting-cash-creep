# meeting-cash-creep

This app transparently show you how expensive your meetings are 🤑

**[Demo](https://qoomon.github.io/meeting-cash-creep)**

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Sources
Icons -> https://www.xicons.org

### Notes

#### Get Job Salaries
* German Salaries -> https://www.kununu.com/de/gehalt
#### Get Job Titels
* kununu API
  ```js
  const locale = 'de_DE' // 'en_US'
  const pattern = 'Softwareengineer'
  await fetch(`https://www.kununu.com/middlewares/salaries/job-titles?locale=${locale}&pattern=${pattern}`)
    .then(res => res.json())
  ```
  Response Example
  ```json
  [
      {
          "id": 15026,
          "jobRoleTitleId": 15026,
          "title": "Softwareengineer",
          "primaryJobTitle": "Software-Entwickler:in",
          "primaryJobTitleId": 15019,
          "primaryJobTitleSlug": "software-entwickler-in",
          "jobTitleGroupId": 987
      }
  ]
  ```
