import React from 'react';

const handleProps = ({ categories, skills }) => ({
  buttons: categories
    .map((cat) => cat.name)
    .reduce(
      (obj, key) => ({
        ...obj,
        [key]: false,
      }),
      { All: true }
    ),
  skills: skills.map((skill) =>
    Object.assign(skill, {
      category: skill.category.sort(),
    })
  ),
});

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({
      categories: props.categories,
      skills: props.skills,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      handleProps({
        categories: nextProps.categories,
        skills: nextProps.skills,
      })
    );
  }

  getRows() {
    // search for true active categorys
    const actCat = Object.keys(this.state.buttons).reduce(
      (cat, key) => (this.state.buttons[key] ? key : cat),
      "All"
    );

    return this.state.skills
      .filter((skill) => actCat === "All" || skill.category.includes(actCat))
      .map((skill) => (
        <SkillBar
          categories={this.props.categories}
          data={skill}
          key={skill.title}
        />
      ));
  }
}