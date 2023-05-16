import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import "./FeaturesSection.scss";

function FeaturesSection(props) {
  const items = [
    {
      title: "Explore",
      description:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg",
    },
    {
      title: "Explore",
      description:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
    },
    {
      title: "Explore",
      description:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg",
    },
    {
      title: "Explore",
      description:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg",
    },
  ];

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <div className="FeaturesSection__features">
          {items.map((item, index) => (
            <div
              className="FeaturesSection__columns columns is-variable is-8 is-vcentered has-text-centered-mobile"
              key={index}
            >
              <div className="column is-half">
                <h3 className="FeaturesSection__title title has-text-weight-bold is-spaced is-3">
                  {item.title}
                </h3>
                <p className="subtitle">{item.description}</p>
              </div>
              <div className="column">
                <figure className="FeaturesSection__image image">
                  <img src={item.image} alt={item.title} />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
