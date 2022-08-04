using System.Text;

namespace WeaponsTable.Models
{
    public class Money
    {
        public int Pp { get; set; }

        public int Gp { get; set; }

        public int Sp { get; set; }

        public int Cp { get; set; }

        public override string ToString()
        {
            var builder = new StringBuilder();

            if (Pp > 0)
            {
                builder.Append($"{Pp} пм. ");
            }

            if (Gp > 0)
            {
                builder.Append($"{Gp} зм. ");
            }

            if (Sp > 0)
            {
                builder.Append($"{Sp} см. ");
            }

            if (Cp > 0)
            {
                builder.Append($"{Cp} мм. ");
            }

            return builder.ToString();
        }
    }
}
