import React from 'react';
import * as DonationWizard from './DonationWizard';

export interface Props {
  amount: number;
  defaultValues: {
    address: string;
    city: string;
    zipCode: string;
    country: string;
  };
  onEditAmount: () => void;
  onSubmit: (data: { [string: string]: unknown }) => void;
}

const DonationAddressForm: React.FC<Props> = ({
  amount,
  defaultValues,
  onEditAmount,
  onSubmit
}) => {
  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      address: formData.get('address'),
      city: formData.get('city'),
      zipCode: formData.get('zipCode'),
      country: formData.get('country')
    };

    onSubmit(data);
  };

  return (
    <DonationWizard.Container>
      <DonationWizard.Title>
        {`Giving ${amount}$`}{' '}
        <DonationWizard.Button variant="transparent" onClick={onEditAmount}>
          (edit amount)
        </DonationWizard.Button>
      </DonationWizard.Title>
      <DonationWizard.Form onSubmit={handleOnSubmit}>
        <DonationWizard.Input
          defaultValue={defaultValues.address}
          name="address"
          placeholder="Full street billing address"
          required
          title="Full street billing address"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.city}
          name="city"
          placeholder="Maturin"
          required
          title="City address"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.zipCode}
          name="zipCode"
          placeholder="06002"
          required
          title="Zip code address"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.country}
          name="country"
          placeholder="Venezuela"
          required
          title="Country address"
        />
        <DonationWizard.Button type="submit">donate</DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationAddressForm;
