module.exports = {
  components: {
    categories: [
      {
        name: 'Collections',
        include: [
          'src/collections/Breadcrumb/Breadcrumb.js',
          'src/collections/Breadcrumb/BreadcrumbSection/BreadcrumbSection.js',
          'src/collections/Breadcrumb/BreadcrumbDivider/BreadcrumbDivider.js',
          'src/collections/Form/Form/Form.js',
          // 'src/collections/Form/FormButton/FormButton.js',
          // 'src/collections/Form/FormCheckbox/FormCheckbox.js',
          // 'src/collections/Form/FormDropdown/FormDropdown.js',
          // 'src/collections/Form/FormField/FormField.js',
          // 'src/collections/Form/FormGroup/FormGroup.js',
          // 'src/collections/Form/FormInput/FormInput.js',
          // 'src/collections/Form/FormRadio/FormRadio.js',
          // 'src/collections/Form/FormSelect/FormSelect.js',
          // 'src/collections/Form/FormTextArea/FormTextArea.js',
          'src/collections/Message/Message/Message.js',
          'src/collections/Menu/Menu.js',
          'src/collections/Menu/MenuItem/MenuItem.js',
          'src/collections/Table/Table.js',
        ],
      },
      {
        name: 'Elements',
        include: [
          'src/elements/Button/Button/Button.js',
          'src/elements/Button/ButtonGroup/ButtonGroup.js',
          'src/elements/Button/ButtonOr/ButtonOr.js',
          'src/elements/Container/Container.js',
          'src/elements/Divider/Divider.js',
          'src/elements/Input/Input.js',
          'src/elements/Flag/Flag.js',
          'src/elements/Header/Header.js',
          'src/elements/Image/Image.js',
          'src/elements/Icon/Icon.js',
          'src/elements/Label/Label.js',
          'src/elements/List/List/List.js',
          'src/elements/Loader/Loader.js',
          'src/elements/Placeholder/Placeholder/Placeholder.js',
          'src/elements/Segment/Segment/Segment.js',
          'src/elements/Segment/SegmentGroup/SegmentGroup.js',
          'src/elements/Step/Step/Step.js',
          'src/elements/Step/StepGroup/StepGroup.js',
          'src/elements/Reveal/Reveal/Reveal.js',
        ],
      },
      {
        name: 'Views',
        include: [
          'src/views/Advertisement/Advertisement.js',
          'src/views/Card/Card.js',
          'src/views/Comment/CommentGroup/CommentGroup.js',
          'src/views/Comment/Comment/Comment.js',
          'src/views/Item/Item.js',
        ],
      },
      {
        name: 'Modules',
        include: [
          'src/modules/Accordion/Accordion.js',
          'src/modules/Checkbox/Checkbox.js',
          'src/modules/Dropdown/Dropdown.js',
          'src/modules/Embed/Embed.js',
          'src/modules/Popup/Popup.js',
          'src/modules/Progress/Progress.js',
          'src/modules/Modal/Modal.js',
          'src/modules/Rating/Rating.js',
          'src/modules/Sidebar/Sidebar.js',
          'src/modules/Tab/Tab.js',
        ],
      },
    ],
  },
  name: 'Semantic UI',
}