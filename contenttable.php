<?php $content = getPageContent('contenttable'); ?>
<?php $contentTable = tableContent(); ?>

<!-- Title -->

<h1 class="col-md-12"><?php print $content['title']; ?></h1>

<!-- body section -->

<?php print $content['body']; ?>

<table id="contentTable">
  <thead>
    <tr>
      <th>name</th>
      <th>surname</th>
      <th>address</th>
      <th>polciy number</th>
      <th>value</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><?php print $contentTable['name']; ?></td>
      <td><?php print $contentTable['surname']; ?></td>
      <td><?php print $contentTable['address']; ?></td>
      <td><?php print $contentTable['policy number']; ?></td>
      <td><?php print $contentTable['value']; ?></td>
    </tr>

    <tr>
      <td><?php print $contentTable2['name']; ?></td>
      <td><?php print $contentTable2['surname']; ?></td>
      <td><?php print $contentTable2['address']; ?></td>
      <td><?php print $contentTable2['policy number']; ?></td>
      <td><?php print $contentTable2['value']; ?></td>
    </tr>

    <tr>
    <td><?php print $contentTable3['name']; ?></td>
      <td><?php print $contentTable3['surname']; ?></td>
      <td><?php print $contentTable3['address']; ?></td>
      <td><?php print $contentTable3['policy number']; ?></td>
      <td><?php print $contentTable3['value']; ?></td>
    </tr>

    <tr>
    <td><?php print $contentTable4['name']; ?></td>
      <td><?php print $contentTable4['surname']; ?></td>
      <td><?php print $contentTable4['address']; ?></td>
      <td><?php print $contentTable4['policy number']; ?></td>
      <td><?php print $contentTable4['value']; ?></td>
    </tr>

    <tr>
    <td><?php print $contentTable5['name']; ?></td>
      <td><?php print $contentTable5['surname']; ?></td>
      <td><?php print $contentTable5['address']; ?></td>
      <td><?php print $contentTable5['policy number']; ?></td>
      <td><?php print $contentTable5['value']; ?></td>
    </tr>
  </tbody>
</table>
