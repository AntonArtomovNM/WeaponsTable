namespace WeaponsTable.Contracts
{
    public interface IRepository<T> where T : MongoDbEntity
    {
        Task<T> GetById(Guid id);

        Task<ICollection<T>> GetAll();

        Task<T> Create(T entity);

        Task<T> Update(T entity);

        Task Delete(Guid id);
    }
}
