import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";
import "./PricingSection.scss";

function PricingSection(props) {
  const auth = useAuth();

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "10",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "20",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
        "Faucibus porta lacus fringilla vel",
        "Aenean sit amet erat nunc",
      ],
    },
    {
      id: "business",
      name: "Business",
      price: "50",
      perks: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer molestie lorem at massa",
        "Faucibus porta lacus fringilla vel",
        "Aenean sit amet erat nunc",
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
      ],
    },
  ];

  return (
    <Section
      id="pricing"
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
        <div className="columns is-centered is-variable is-4 is-desktop">
          {plans.map((plan, index) => (
            <div
              className="PricingSection__column column is-one-third-desktop"
              key={index}
            >
              <div className="PricingSection__card card">
                <div className="PricingSection__card-content card-content">
                  <div className="PricingSection__name has-text-weight-bold">
                    {plan.name}
                  </div>
                  <div className="PricingSection__price has-text-weight-bold is-size-1">
                    ${plan.price}
                    <span className="PricingSection__period is-size-3">
                      /mo
                    </span>
                  </div>

                  {plan.description && (
                    <p className="PricingSection__description">
                      {plan.description}
                    </p>
                  )}

                  {plan.perks && (
                    <ul className="PricingSection__perks">
                      {plan.perks.map((perk, index) => (
                        <li key={index}>
                          <i className="fas fa-check has-text-primary" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    to={
                      auth.user
                        ? `/purchase/${plan.id}`
                        : `/auth/signup?next=/purchase/${plan.id}`
                    }
                    className="PricingSection__button button is-medium is-primary"
                  >
                    Choose
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default PricingSection;
