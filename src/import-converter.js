export default function importConverter(jsonData, presentColumnsArray){
  let columnIndexes = new Map();

  for (let presentColumn of presentColumnsArray){
    columnIndexes.set(presentColumn, presentColumnsArray.indexOf(presentColumn));
    console.log(`${presentColumn} : ${columnIndexes.get(presentColumn)}`)
  }

  let xmlOutput = `<?xml version="1.0" encoding="utf-8"?><Feed xmlns="http://www.bazaarvoice.com/xs/PRR/StandardClientFeed/5.6" name="temp" extractDate="tempDate">`;

  for (let i = 1; i < jsonData.length; i++){
    xmlOutput += `
    <Product id=${jsonData[i][columnIndexes.get('Product-ExternalId')]}>
    <Reviews>
    <Review id=${i}>
    <ModerationsStatus>APPROVED</ModerationsStatus>
    <UserProfilereference id=${jsonData[i][columnIndexes.get('User-ExternalId')]}>
    <ExternalId>${jsonData[i][columnIndexes.get('User-ExternalId')]}</ExternalId>
    <DisplayName>${jsonData[i][columnIndexes.get('User-ExternalId')]}</DisplayName>
    <HyperlinkingEnabled>false</HyperlinkingEnabled>
    <Anonymous>false</Anonymous>
    </UserProfileReference>
    <Title><![CDATA[${jsonData[i][columnIndexes.get('Title')]}]]></Title>
    <ReviewText><![CDATA[${jsonData[columnIndexes.get('ReviewText')]}]]></ReviewText>
    <Rating>${jsonData[i][columnIndexes.get('Rating')]}</Rating>
    <IpAddress>${jsonData[i][columnIndexes.get('IpAddress')]}</IpAddress>
    <UserEmailAddress>${jsonData[i][columnIndexes.get('UserEmailAddress')]}</UserEmailAddress>
    <ReviewerLocation>${jsonData[i][columnIndexes.get('ReviewerLocation')]}</ReviewerLocation>
    <SubmissionTime>${jsonData[i][columnIndexes.get('SubmissionTime')]}</SubmissionTime>
    <Featured>false</Featured>
    <DisplayLocale>${jsonData[i][columnIndexes.get('DisplayLocale')]}</DisplayLocale>
    </Review>
    </Reviews>
    </Product>
    `
  }

  xmlOutput += `</Feed>`;

  console.log(xmlOutput);
}
